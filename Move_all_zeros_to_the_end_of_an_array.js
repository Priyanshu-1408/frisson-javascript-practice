// Move all zeros to the end of an array.

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]


let arr =  [0, 1, 0, 3, 12];

let result = [];

for(let i=0;i<arr.length;i++){
    if(arr[i] !==0){
        result.push(arr[i]);
    }
}

while(result.length < arr.length){
    result.push(0);
    // length ++;
}

console.log(result);