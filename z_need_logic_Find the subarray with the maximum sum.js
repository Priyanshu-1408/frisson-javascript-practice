function maxSubarray(arr) {
    let currentSum = arr[0];
    let maxSum = arr[0];

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum = currentSum + arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    const result = [];

    for (let i = start; i <= end; i++) {
        result[result.length] = arr[i];
    }

    return result;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubarray(arr));