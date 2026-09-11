// Remove duplicate characters from a string.

import { MyIncludes } from "./includes.js";

// Input: "programming"
// Output: "progamin"


let str = "programming";

let ans  =  "";

for(let i=0;i<str.length;i++){
    // if(!ans.includes(str[i])){
    if(!MyIncludes(ans,str[i])){
        ans = ans + str[i];
    }   
}

console.log(ans);