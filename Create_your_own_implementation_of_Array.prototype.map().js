import { myPush } from "./push.js";

export function myMap(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // result.push(callback(arr[i], i, arr));
        myPush(result,callback(arr[i],i,arr));
    }

    return result;
}