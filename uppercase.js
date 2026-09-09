export function myUpperCase(str) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let found = false;

        for (let j = 0; j < lower.length; j++) {
            if (str[i] === lower[j]) {
                result += upper[j];
                found = true;
                break;
            }
        }

        if (!found) {
            result += str[i];
        }
    }

    return result;
}