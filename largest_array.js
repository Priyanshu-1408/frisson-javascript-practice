function maximum(arr){
    let max = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i] > min){
            max = arr[i];
        }
    }
    return max;
}

let arr = [1,3,4,3,8,19,455,166,4];
console.log(maximum(arr));