// import {Mypush} from "./push.js"
import {myPush} from "./push.js";
function chunk(arr, size) {


    let result = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {

        // temp.push(arr[i]);
        myPush(temp,arr[i]);

        if (temp.length === size) {
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length > 0) {
        // result.push(temp);
        myPush(result,temp)
    }

    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));