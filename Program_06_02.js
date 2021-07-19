//
class Group{
    constructor(){
        this.group = [];
    }

    add(value){
        let len = this.group.length;
        for(let i=0;i<len;i++){
            if(value === this.group[i]){
                return ;
            }
        }
        this.group[len] = value;
    }

    delete(value){
        let len = this.group.length;
        let pos = this.group.indexOf(value);
        let arr1 = this.group.slice(0,pos);
        let arr2 = this.group.slice(pos+1,len);

        this.group = [...arr1,...arr2];
    }

    has(value){
        let len = this.group.length;
        for(let i=0;i<len;i++){
            if(value === this.group[i]){
                return true;
            }
        }
        return false;
    }

    display(){
        console.log(this.group);
    }

    static from(arr){
        let len = arr.length;
        let newSet = new Array();
        for(let i=0;i<len;i++){
            if(newSet.indexOf(arr[i]) == -1 ){
                newSet.push(arr[i]);
            }
        }
        this.group = newSet;
        console.log(this.group);
    }
}

const set1 = new Group();

set1.add(2);
set1.add(1);
set1.add(6);
set1.add(5);
set1.add(4);
set1.add(2);

set1.display();

set1.delete(6);

set1.display();

console.log(set1.has(2))
console.log(set1.has(6))
set1.delete(5);
console.log(set1.has(4))
console.log(set1.has(5))

Group.from([12,13,14]);

