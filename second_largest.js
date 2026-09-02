let arr = [1,2,3,4,1,8,9,10,12,34,];

let min = -Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>min){
        min = arr[i];
    }
}

let min2 = -Infinity;
// console.log(min);
for(let i=0;i<arr.length;i++){
    if(arr[i]>min2 && arr[i]<min){
        min2 = arr[i];
    }
}

console.log(min2);
