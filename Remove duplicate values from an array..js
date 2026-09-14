import { myPush } from "./push.js";

let arr = [1, 2, 2, 3, 4, 3, 5];

let result = [];

for (let i = 0; i < arr.length; i++) {

    let alreadyExists = false;

    for (let j = 0; j < result.length; j++) {

        if (arr[i] === result[j]) {
            alreadyExists = true;
            
        }
    }

    if (alreadyExists === false) {
        
        myPush(result,arr[i]);
    }
}

console.log(result);