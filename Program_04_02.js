/* Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
*/

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

