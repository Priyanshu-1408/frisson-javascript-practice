let str = "hello";
let result = "";
let replace = "X"

for (let i = 0; i < str.length; i++) {
    if (str[i] === "l") {
        result = result + replace;
    } else {
        result = result + str[i];
    }
}

console.log(result);