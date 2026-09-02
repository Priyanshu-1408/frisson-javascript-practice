// Find the largest number in an array
let arr = [4,6,8,3,10,16,8];
let max = -Infinity;
let ans = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
    // console.log(arr[i]);
}

console.log(max);
