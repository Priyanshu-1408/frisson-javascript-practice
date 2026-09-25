let str = "aaabbcccc";

let result = "";
let count = 1;

if (str.length === 0) {
    console.log(result);
}

for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
        count++;
    } else {
        result += str[i] + count;
        count = 1;
    }
}

console.log(result);

