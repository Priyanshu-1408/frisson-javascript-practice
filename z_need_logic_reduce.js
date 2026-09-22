function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

const arr = [1, 2, 3, 4];

const result = myReduce(arr, function (acc, current) {
    return acc + current;
}, 0);

console.log(result);