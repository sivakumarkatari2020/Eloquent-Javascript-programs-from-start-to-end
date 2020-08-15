function countBs(str){
    let string=str.toLowerCase();
    var count=0;
    for(let i=0;i<string.length;i++){
        if(string[i]=="b") count++;
    }
    return count;
}

console.log(countBs("A bad Boy is serching for his Ball"));