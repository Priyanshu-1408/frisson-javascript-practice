function longestPalindrome(str) {
    let longest = "";

    for (let i = 0; i < str.length; i++) {

        for (let j = i; j < str.length; j++) {

            let left = i;
            let right = j;
            let isPalindrome = true;

            // Check palindrome
            while (left < right) {
                if (str[left] !== str[right]) {
                    isPalindrome = false;
                    break;
                }

                left++;
                right--;
            }

            // If palindrome, create substring manually
            if (isPalindrome) {
                let current = "";

                for (let k = i; k <= j; k++) {
                    current = current + str[k];
                }

                // Compare length
                if (current.length > longest.length) {
                    longest = current;
                }
            }
        }
    }

    return longest;
}

console.log(longestPalindrome("babad"));