function range(start,end,step=1){
    let arrRange=[ ];
    for(let i=start;i<=end;i=i+step){
       arrRange.push(i);
    }
    return arrRange;
}

let Range=range(0,100,6);
console.log(Range);

function sum(arr){
    let retArr=arr.reduce((a,b)=> a+b);
    return retArr;
}

console.log(sum(Range));