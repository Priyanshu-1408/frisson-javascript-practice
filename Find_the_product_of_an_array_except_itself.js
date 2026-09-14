

let arr = [1, 2, 3, 4];

let result = [];

for (let i = 0; i < arr.length; i++) {

    let product = 1;

    for (let j = 0; j < arr.length; j++) {

        if (i != j) {
            product = product * arr[j];
        }
    }

    result[i] = product;
}

console.log(result);