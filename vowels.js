function vowels(name , count){
    for(let i=0;i<name.length;i++){
        if(name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u' ||name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U'){
            count ++
        }
    }
    return count;
}


let name = 'priyanshu'
let count = 0;

console.log(vowels(name , count));