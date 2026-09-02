let arr = [1, 2, 4, 5, 6,7];

let last = arr[arr.length-1];
let sum = 0;

for(let i=1;i<=last;i++){
    sum = sum + i;
}

// console.log(sum);

let arrSum = 0;

for(let i=0;i<arr.length;i++){
    arrSum = arrSum + arr[i];
}

// console.log(arrSum);

let missing = sum - arrSum;
console.log(missing);

