function maximum(arr){
    let min = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i] > min){
            min = arr[i];
        }
    }
    return min;
}

let arr = [1,3,4,3,8,19,455,166,4];
console.log(maximum(arr));