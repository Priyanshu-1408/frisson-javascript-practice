import { myUpperCase } from "./uppercase.js";
let str = "hello world javascript";


let ans = "";

let u = myUpperCase(str[0]);
ans = ans + u;

for(let i=1;i<str.length;i++){
    
    if(str[i] == " "){
        ans = ans + " ";
        // ans = ans + str[i+1].toUpperCase();
        ans = ans + myUpperCase(str[i+1]);
        i++;
    }else{
        ans = ans + str[i];
    }
}

console.log(ans);