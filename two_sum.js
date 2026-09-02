let arr = [1,2,7,8,11,15];
let target = 9;

let i = 0;
let j = arr.length-1;

while(i<=j){
    if((arr[i] + arr[j]) == target){
        console.log("[" + arr[i] + "," + arr[j] + "]");"[" + arr[i] + "," + arr[j] + "]"
        // return "[" + arr[i] + "," + arr[j] + "]";
        
    }
    else if((arr[i] + arr[j]) > target){
        j--;
        
    }else{

        i++;
        
    }
    // break;
                                                                                                                             
}