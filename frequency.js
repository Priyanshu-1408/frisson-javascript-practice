let arr = [1, 2, 2, 3, 3, 3];

let frequency = {};

for (let element of arr) {
    if (frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }
}

console.log(frequency);