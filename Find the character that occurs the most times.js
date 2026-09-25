const str = "hello world";



let maxChar = "";
let maxCount = 0;

if (str.length === 0) {
    console.log(maxChar);
}

for (let i = 0; i < str.length; i++) {

    let count = 0;

    for (let j = 0; j < str.length; j++) {

        if (str[i] === str[j]) {
            count++;
        }
    }

    if (count > maxCount) {
        maxCount = count;
        maxChar = str[i];
    }
}

