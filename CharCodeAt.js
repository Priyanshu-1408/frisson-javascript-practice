export function myCharCodeAt(str, index) {

    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    

    for (let i = 0; i < alpha.length; i++) {
        if (str[index] == alpha[i]) {
            return 65 + i;
        }
    }
}

// console.log(myCharCodeAt("ABC", 1));