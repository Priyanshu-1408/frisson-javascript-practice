let arr1 = [1,2,3,4];
let arr2 = [3,4,6,7];

let result = [];

for(let i=0;i<arr1.length;i++){
    if(!result.includes(arr1[i])){
        result.push(arr1[i]);
    }
}


for(let i=0;i<arr2.length;i++){
if(!result.includes(arr2[i])){
    result.push(arr2[i]);
}
}

console.log(result);