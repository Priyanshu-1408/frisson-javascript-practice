let str = "hello world javascript";


let ans = "";

let u = str[0].toUpperCase();
ans = ans + u;

for(let i=1;i<str.length;i++){
    
    if(str[i] == " "){
        ans = ans + " ";
        ans = ans + str[i+1].toUpperCase();
        i++;
    }else{
        ans = ans + str[i];
    }
}

console.log(ans);