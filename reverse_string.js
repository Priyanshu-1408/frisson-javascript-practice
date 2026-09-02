const str = "priyanshu";
let str2 = '';

for(let i=str.length-1;i>=0;i--){
    str2 = str2+str[i];
}

for(let i=0;i<str2.length;i++){
    console.log(str2[i]);
}
function reverse(name , ans){
    for(let i= name.length-1;i>=0;i--){
        ans = ans + name[i];
    }
    return ans;
}

let name= 'priyanshu';
let ans = ''

console.log(reverse(name, ans));
