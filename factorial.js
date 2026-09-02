function factorial(number){
    for(let i=(number-1);i>=1;i--){
        number = number*i;
    }
    return number
    
}
let ans = factorial(6);
console.log(ans)