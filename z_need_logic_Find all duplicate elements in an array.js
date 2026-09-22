const arr = [1, 2, 3, 2, 4, 3, 5];

const duplicates = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count > 1) {
        let alreadyAdded = false;

        for (let k = 0; k < duplicates.length; k++) {
            if (duplicates[k] === arr[i]) {
                alreadyAdded = true;
                break;
            }
        }

        if (!alreadyAdded) {
            duplicates[duplicates.length] = arr[i];
        }
    }
}

console.log(duplicates);