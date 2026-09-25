


import { myUpperCase } from "./uppercase.js";

let str = "hello world javascript";

let ans = "";

for (let i = 0; i < str.length; i++) {

    if (i === 0 || str[i - 1] === " ") {
        ans = ans + myUpperCase(str[i]);
    } else {
        ans = ans + str[i];
    }
}

console.log(ans);