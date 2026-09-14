let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let result = [];

for (let i = 0; i < matrix.length; i++) {
    result[i] = [];

    for (let j = 0; j < matrix.length; j++) {
        result[i][j] = matrix[matrix.length - 1 - j][i];
    }
}

console.log(result);
console.log(matrix.length);