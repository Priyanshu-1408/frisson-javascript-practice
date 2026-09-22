let arr = [2, 2, 1, 1, 1, 2, 2];

let majority = -1;

for (let i = 0; i < arr.length; i++) {

    let count = 0;

    for (let j = 0; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count > arr.length / 2) {
        majority = arr[i];
        break;
    }
}
                      
console.log(majority);