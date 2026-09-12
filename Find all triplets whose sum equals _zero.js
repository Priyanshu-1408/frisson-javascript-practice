import { myPush } from "./push.js";

let arr = [-1, 0, 1, 2, -1, -4];

let result = [];

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        for (let k = j + 1; k < arr.length; k++) {

            if (arr[i] + arr[j] + arr[k] === 0) {
            
                myPush(result,[arr[i], arr[j], arr[k]]);
            }

        }
    }
}

console.log(result);