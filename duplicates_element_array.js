let arr = [1, 2, 3, 2, 4, 3, 5]

let frequency = {};
let duplicates = [];

for (let element of arr) {
    if (frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }
}

for (let element in frequency){
    
}

console.log(frequency);