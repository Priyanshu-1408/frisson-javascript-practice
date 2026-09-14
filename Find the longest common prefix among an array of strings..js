import { MyIncludes } from "./includes.js";

let str = "abcabcbb";

let longest = "";

for (let i = 0; i < str.length; i++) {

    let current = "";

    for (let j = i; j < str.length; j++) { 

        if (
             MyIncludes(current,str[j])) {
            break;
        }

        current = current + str[j];

        if (current.length > longest.length) {
            longest = current;
        }
    }
}

console.log(longest);
console.log(longest.length);