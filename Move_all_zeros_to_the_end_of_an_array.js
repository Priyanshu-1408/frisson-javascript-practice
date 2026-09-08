// Move all zeros to the end of an array.

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]


import { myPush } from "./push.js";

let arr =  [0, 1, 0, 3, 12];

let result = [];

for(let i=0;i<arr.length;i++){
    if(arr[i] !==0){
        // result.push(arr[i]);
        myPush(result,arr[i]);
    }
}

while(result.length < arr.length){
    // result.push(0);
    myPush(result, 0);
    // length ++;
}

console.log(result);