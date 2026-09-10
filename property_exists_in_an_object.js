// // let students = {
// //     name:"priyanshu",
// //     class : "11th",
// //     schol : "sps"
// // }

// // console.log(Object.hasOwn(students,"nae"));




let students = {
    name: "priyanshu",
    class: "11th",
    schol: "sps"
};

let find = "name";

let found = false;

for (let key in students) {
    if (key === find) {
        found = true;
        break;
    }
}

if (found) {
    console.log("exist");
} else {
    console.log("not exist");
}