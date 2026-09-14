import { myUpperCase } from "./uppercase.js";

let str1 = "Hello";
let str2 = "hello";

if (myUpperCase(str1) === myUpperCase(str2)) {
    console.log(true);
} else {
    console.log(false);
}