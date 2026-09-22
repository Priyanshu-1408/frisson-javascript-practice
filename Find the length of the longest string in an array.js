let arr = ["apple", "banana", "cat", "elephant"];

let maxLength = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i].length > maxLength) {
        maxLength = arr[i].length;
    }
}

console.log(maxLength); 