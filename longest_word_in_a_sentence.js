import { MySplit } from "./split.js";

let sentence = "my name is priyanshu";

// let words = sentence.split(" ");
let words = MySplit(sentence, " ")

console.log(words);

let longest = "";

for(let i =0;i<words.length;i++){
    if(words[i].length > longest.length){
        longest = words[i];
    }
}

console.log(longest);