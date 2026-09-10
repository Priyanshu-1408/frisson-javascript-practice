// const saman = {
//     rice : 10,
//     daal : 20,
//     sabzi : 40
// }

// const maxVal = Math.max(...Object.values(saman));
// console.log(maxVal);


const saman = {
    rice: 10,
    daal: 20,
    sabzi: 40
};

let maxVal = -Infinity;

for (let key in saman) {
    if (saman[key] > maxVal) {
        maxVal = saman[key];
    }
}

console.log(maxVal);