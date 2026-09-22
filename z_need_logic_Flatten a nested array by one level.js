const arr = [1, [2, 3], [4, 5]];
const result = [];

for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "object") {
        for (let j = 0; j < arr[i].length; j++) {
            result[result.length] = arr[i][j];
        }
    } else {
        result[result.length] = arr[i];
    }
}

console.log(result);