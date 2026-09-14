import { myUpperCase } from "./uppercase.js";

let str = "hello";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        result = result + myUpperCase(str[i]);
    } else {
        result = result + str[i];
    }
}

console.log(result);