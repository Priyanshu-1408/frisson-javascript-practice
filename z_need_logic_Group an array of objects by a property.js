const arr = [
    { name: "A", department: "IT" },
    { name: "B", department: "HR" },
    { name: "C", department: "IT" }
];

const result = {};

for (let i = 0; i < arr.length; i++) {
    const department = arr[i].department;

    if (!result[department]) {
        result[department] = [];
    }

    result[department][result[department].length] = arr[i];
}

console.log(result);