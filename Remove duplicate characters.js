// Remove duplicate characters from a string.

// Input: "programming"
// Output: "progamin"


let str = "programming";

let ans  =  "";

for(let i=0;i<str.length;i++){
    if(!ans.includes(str[i])){
        ans = ans + str[i];
    }   
}

console.log(ans);