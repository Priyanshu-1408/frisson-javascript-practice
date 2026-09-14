// Convert an array of objects into an object indexed by id.

let arr = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aman" },
    { id: 3, name: "Priyanshu" }
];

console.log(arr[1]);
console.log()

let result = {};

for (let i = 0; i < arr.length; i++) {
    result[arr[i].id] = arr[i];
}

console.log(result);