// Find the student with the highest marks.
const students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 95 },
  { name: "C", marks: 75 }
];

let highest = students[0];

for(let i =0;i<students.length;i++){

    if(students[i].marks > highest.marks){
        highest = students[i];
    }

}

console.log(highest.marks);
console.log(highest.name);




// console.log(highest);




// // Output: B

