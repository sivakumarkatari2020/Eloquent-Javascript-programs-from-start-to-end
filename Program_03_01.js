//program to return a smallest and biggest numbers from array

var arr=[22,44,890,1736,888];
console.log(arr.reduce((a,b)=>{return a>b?b:a;}));
console.log(arr.reduce((a,b)=>{return a>b?a:b;}));