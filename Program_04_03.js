//class for creating node instance
class Node{
    constructor(data,rest=null){
        this.value = data;
        this.rest = rest;
    }
}
//class for all type of list methods
class ListMethods{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    insert(data){
        this.head = new Node(data,this.head);
        this.size += 1;        
    }

    arrayToList(arr){
        let dataArr = arr;
        for(let i=0;i<dataArr.length;i++){
            this.insert(dataArr[i]);
        }
    }

    display(){
        let listObj = this.head;
        for(let i=0;i<this.size;i++){
            console.log(listObj.value);
            listObj = listObj.rest;
        }
        //console.log(this.head)
    }
}

let list = new ListMethods;

list.arrayToList([1,2,3]);

list.display();
