const str = "programming";

const result = [];

for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
            count++;
        }
    }

    if (count > 1) {
        let alreadyAdded = false;

        for (let k = 0; k < result.length; k++) {
            if (result[k] === str[i]) {
                alreadyAdded = true;
                break;
            }
        }

        if (!alreadyAdded) {
            result[result.length] = str[i];
        }
    }
}

console.log(result);