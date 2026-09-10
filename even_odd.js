function check(no){

    if(typeof no != Number){
        return "erorrrrrrrr";
    }

    if(no%2==0){
        return "even"
        
    }else{
        return "odd"
        
    }
}
 ""
let ans = check(10);
console.log(ans);