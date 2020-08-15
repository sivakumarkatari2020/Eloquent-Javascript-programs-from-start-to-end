function countBs(str){
    var count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="B") count++;
    }
    return count;
}
console.log(countBs("A bad Boy is serching for his Ball"));