// const obj1 = {
//   name: "A",
//   age: 20,
//   city: "Delhi"
// };

// const obj2 = {
//   name: "B",
//   age: 25,
//   country: "India"
// };


// let result = []; 
// let keys = Object.keys(obj1);

// console.log(keys);

// for(let i=0;i<keys.length;i++){
//   if(obj2.hasOwnProperty(keys[i])) {
//       result.push(keys[i]);
//     }
// }

// console.log(result);


// // isme abhi thoda confusion hai  


const obj1 = {
    name: "A",
    age: 20,
    city: "Delhi"
};

const obj2 = {
    name: "B",
    age: 25,
    country: "India"
};

let result = [];

for (let key in obj1) {

    if (key in obj2) {
        result[result.length] = key;
    }
}

console.log(result);