// Find the smallest number in an array
let arr = [4,6,8,3,10,16,8];
let min = Infinity;
let ans = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i] < min){
        min = arr[i];
    }
    // console.log(arr[i]);
}

console.log(min);
