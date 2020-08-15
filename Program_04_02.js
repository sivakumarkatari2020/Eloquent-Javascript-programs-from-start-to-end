var arr=[1,2,3,4,5];

//By using .reverse method the original array will be modified

function reverseArray(arr){
    let newArr=arr.reverse();
    console.log(newArr);
}

reverseArray(arr);

//it doesn't effect original array
function reverseArrayInPlace(arr){
    let newArray=[ ];
    for(let i=arr.length-1;i>=0;i--){
        newArray.push(arr[i]);
    }
    console.log(newArray);
}

reverseArrayInPlace(arr);

