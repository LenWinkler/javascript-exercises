/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str) {
    /*
    Split string at every char.
    Two pointers, L & R
    L starts at beginning of split str array, R starts at end
    Using while loop (while R > L)
    If numbers are equal, continue
    If not, return false
    If we get to the point where R <= L, we return true
    */

    str = str.split('');

    let L = 0;
    let R = str.length - 1;

    while (R > L) {
        if (str[L] === str[R]) {
            L++;
            R--;
        } else {
            return false;
        }
    }

    return true;

}

module.exports = palindrome;
