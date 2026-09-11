let user = {
    name: "Priyanshu",
    age: null,
    city: "Delhi",
    email: undefined,
    college: "ABC"
};

let ans = {};

for(let key in user){
    if(user[key] =! null && user[key] != undefined){
        ans[key]  = user[key]
    }
}

console.log(ans);