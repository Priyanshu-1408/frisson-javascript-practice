// const str = "The quick brown fox jumps over the lazy dog.";

import { myPush } from "./push.js";

// const words = str.split(" ");

// console.log(words);

export function MySplit(str, seprator){

    let result = [];
    let words = "";
    

    for(let i=0;i<str.length;i++){
        if(str[i] == seprator){
            // result.push(words);
            myPush(result,words);
            words = "";
        }else{
            words = words + str[i];
        }
    }
    // result.push(words);
    myPush(result,words);
    return result;
}

// console.log(MySplit("my name is pk" , " "));