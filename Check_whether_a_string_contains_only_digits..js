// // Check whether a string contains only digits.

import { myCharCodeAt } from "./CharCodeAt.js";


let str = "uiui7";

// for(let i=0;i<str.length;i++){
//     if(str.charCodeAt(i) < 48 || str.charCodeAt(i) >  57){
//         console.log("false");
//     }
// }

function check(str){
    for(let i=0;i<str.length;i++){
    // if(str.charCodeAt(i) < 48 || str.charCodeAt(i) >  57){
    if(myCharCodeAt(str , str[i]) < 48 || myCharCodeAt(str , str[i]) >  57 ){
        return false;
    }
}
return true;
}

console.log(check("8787"));