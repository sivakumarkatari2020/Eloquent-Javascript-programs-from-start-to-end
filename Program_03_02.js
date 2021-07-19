/* We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
55
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?

ps : 22833 is the maximum number it can verify.
*/

function isEven(x){
    if(x >= 0){
        let y=x;
        let current = y;

        if(y>1){
            y=current-2;
            return isEven(y);
        }else{
            return y;
        }
    }else{
        return null;
    }
}

let result=isEven(22833);

if(result == null){console.log("Enter a Positive number\n");}
else{
    if(result == 1){console.log("ODD");}
    else{console.log("EVEN");}
}

