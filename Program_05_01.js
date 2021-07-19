//function to flattening an array
function flatten(arr){
for(let i=0;i<arr.length;i++){
    if(arr[i].length>1){
        flatten(arr[i]);
    }
    else{
        console.log(arr[i]);
    }
}
}

flatten([1,2,3,[4,5,[6,7],[8,9]],10]);