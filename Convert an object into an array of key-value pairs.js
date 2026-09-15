import { myPush } from "./push.js";

let obj = {
    name: "Priyanshu",
    age: 22,
    city: "Delhi"
};

let result = [];

for (let key in obj) {
    // result.push([key, obj[key]]);
    myPush(result,[key , obj[key]])
}

console.log(result);