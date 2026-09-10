// let arr = [2,4,7,9,2];

// let no = 4;

// let ans = arr.indexOf(no);
// // console.log(ans);

// if(ans == -1){
//     console.log("no exist");
// }else{
//     console.log("exist");
// }



let arr = [2, 4, 7, 9, 2];

let no = 4;

let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === no) {
        found = true;
        break;
    }
}

if (found) {
    console.log("exist");
} else {
    console.log("no exist");
}