// // Check whether a string contains only digits.


// let str = "uvh3lj";

// for(let i=0;i<str.length;i++){
//     if(str.charCodeAt(i) < 48 || str.charCodeAt(i) >  57){
//         console.log("false");
//     }
// }

function check(str){
    for(let i=0;i<str.length;i++){
    if(str.charCodeAt(i) < 48 || str.charCodeAt(i) >  57){
        return false;
    }
}
return true;
}

console.log(check("8787"));