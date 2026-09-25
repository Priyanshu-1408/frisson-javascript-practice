export function MyIncludes(str, search) {

        if (search.length === 0) {
        return true;
    }

    for (let i = 0; i <= str.length - search.length; i++) {

        let isMatch = true;

        for (let j = 0; j < search.length; j++) {

            if (str[i + j] !== search[j]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            return true;
        }
    }

    return false;
}

console.log(MyIncludes("hello world", "world"));
                    






// export function MyIncludes(str, search) {


//     for (let i = 0; i < str.length; i++) {

//         let match = true;

//         for (let j = 0; j < search.length; j++) {

//             if (str[i + j] !== search[j]) {
//                 match = false;
//                 break;
//             }
//         }

//         if (match) {
//             return true;
//         }
//     }

//     return false;
// }








// console.log(myIncludes("hello world" , "world"))