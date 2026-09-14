let str = "Hello World JavaScript";

let result = "";

for (let i = 0; i < str.length; i++) {

    if (str[i] !== " ") {
        result = result + str[i];
    }
}

console.log(result);