const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let currentSum = arr[0];
let maxSum = arr[0];

if (arr.length === 0) {
    console.log(0);
}

for (let i = 1; i < arr.length; i++) {

    if (currentSum + arr[i] > arr[i]) {
        currentSum = currentSum + arr[i];
    } else {
        currentSum = arr[i];
    }

    if (currentSum > maxSum) {
        maxSum = currentSum;
    }
}

console.log(maxSum);