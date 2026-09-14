let arr = [100, 4, 200, 1, 3, 2];

let longest = 0;

for (let i = 0; i < arr.length; i++) {

    let current = arr[i];
    let count = 1;

    for (let j = 0; j < arr.length; j++) {

        let next = current + 1;

        if (arr[j] === next) {
            current = next;
            count++;
            j = 0; 
        }
    }

    if (count > longest) {
        longest = count;
    }
}

console.log(longest);