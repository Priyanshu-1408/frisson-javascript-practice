// let str1 = "silent";
// let str2 = "listen";

// if(str1.length == str2.length){
//     console.log("not anagram");
// }

// let arr1 = str1.split("").sort();
// let arr2 = str2.split("").sort();


// // console.log(arr1);
// // console.log(arr2);

// for(let i=0;i<arr1.length;i++){
//     if(arr1[i] != arr2[i]){
//         console.log("not anagram");
//         return;
//     }
// }


function anagram(str1, str2){
    if(str1.length != str2.length){
       return "not anagram";
    }

    let arr1 = str1.split("").sort();
    let arr2 = str2.split("").sort();


    for(let i=0;i<arr1.length;i++){
    if(arr1[i] != arr2[i]){
        
        return "not anagram";
    }
}
return "anagram"

}

let str1 = "silent";
let str2 = "listen";
console.log(anagram(str1,str2));