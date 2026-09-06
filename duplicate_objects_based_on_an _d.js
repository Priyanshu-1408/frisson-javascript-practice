const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "C" },
  { id: 3, name: "D" },
  { id: 2, name: "E" }
];

let seen = new Set();
let duplicates = [];

for(let i=0;i<users.length;i++){
    if(seen.has(users[i].id)){
        duplicates.push(users[i]);
    }else{
        seen.add(users[i].id);
    }
}

console.log(duplicates);
