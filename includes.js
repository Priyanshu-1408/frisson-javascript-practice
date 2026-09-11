export function MyIncludes(str, search) {

    for (let i = 0; i < str.length; i++) {

        let match = true;

        for (let j = 0; j < search.length; j++) {

            if (str[i + j] !== search[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return true;
        }
    }

    return false;
}








// console.log(myIncludes("hello world" , "world"))