const people = [
  { name: "A", age: 25 },
  { name: "B", age: 20 },
  { name: "C", age: 30 }
];


for(let i=0;i<people.length;i++){
    for(let j=i+1;j<people.length;j++){
        if(people[i].age > people[j].age){
            let temp = people[i];
            people[i] = people[j];
            people[j] = temp;
        }
    }
}

console.log(people);


[
    { name: "B", age: 20 },
    { name: "A", age: 25 },
    { name: "C", age: 30 }
]