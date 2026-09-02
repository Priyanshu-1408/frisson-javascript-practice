// Reverse the words in a sentence.

// Input: "I love JavaScript"
// Output: "JavaScript love I"


let str = "I love JavaScript";

let words = str.split(" ");

let arr = [];
for(let i=words.length-1;i>=0;i--){
    arr.push(words[i]);
}

console.log(arr);



// console.log(words);