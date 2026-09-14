// Reverse the words in a sentence.

import { myPush } from "./push.js";
import { MySplit } from "./split.js";

// Input: "I love JavaScript"
// Output: "JavaScript love I"


let str = "I love JavaScript";

// let words = str.split(" ");
let words = MySplit(str , " ");

let arr = [];
for(let i=words.length-1;i>=0;i--){
    // arr.push(words[i]);
    myPush(arr,words[i]);
}

console.log(arr);



// console.log(words);