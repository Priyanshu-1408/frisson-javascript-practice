
// Check whether one string is a rotation of another.

// Input:

// "waterbottle"
// "erbottlewat"


function check(str1 , str2){
    if(str1.length != str2.length){
        return false;
    }

    let add = str1 + str1;

    let ans = add.includes(str1);

    return ans;

    

    
}


let str1 = "waterbottle";
let str2 = "erbottlewat";
console.log(check(str1 , str2))


