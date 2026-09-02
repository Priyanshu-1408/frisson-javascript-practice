const str = 'nitin';

let i=0;
let j=str.length-1;

while(i<str.length){
    if(str[i] != str[j]){
        console.log("not palindrome");
        return
    }
    console.log("palindrome");
    return
}