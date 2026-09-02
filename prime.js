function prime(no){
    if(no<=1){
        return "not prime";
    }

    for(let i=2;i<no;i++){
        if(no%i == 0){
            return "prime"
        }
    }
    return "not prime";
}

console.log(prime(5));