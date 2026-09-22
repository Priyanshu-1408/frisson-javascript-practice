import {myPush} from "./push.js";

export function myFilter(arr, fn) {


    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (fn(arr[i])) {
            result.push(arr[i]);
            // myPush(result,arr[i]);
        }
    }

    return result;
}

