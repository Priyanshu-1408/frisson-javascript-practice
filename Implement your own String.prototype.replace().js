function myReplace(str, oldChar, newChar) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === oldChar) {
            result = result + newChar;
        } else {
            result = result + str[i];
        }
    }

    return result;
}

console.log(myReplace("priyansu","i","x"));