let students = {
    a: "red",
    b: "blue",
    c: "red",
    d: "green",
    e: "blue",
    f: "red"
};

let count = {};

for (let key in students) {

    let value = students[key];

    if (count[value] == undefined) {
        count[value] = 1;
    } else {
        count[value]++;
    }
}

console.log(count);
console.log(students);