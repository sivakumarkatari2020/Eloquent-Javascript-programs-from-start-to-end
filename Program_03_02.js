var num=6;
function isEven(x){
    var y=x;
    if(y>=2){
        y=y-2;
        isEven(y);
    }
    return y;
}

var result=isEven(10);
console.log(result);
if(result==1){console.log("ODD");}
else{console.log("EVEN");}