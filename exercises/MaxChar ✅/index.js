/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
    // use hashtable to store chars and their counts
    // loop over string first time, counting each alpha char
    // find max char in hashtable and return it

    let chars = {};
    let theMaxChar = '';
    let currentHighest = 0;

    for (const char in str) {
        if (str[char] in chars) {
            chars[str[char]]++
        } else {
            chars[str[char]] = 1
        };
    };

    for (const char in chars) {
        if (chars[char] > currentHighest) {
            theMaxChar = char;
            currentHighest = chars[char]
        }
    };

    return theMaxChar;

}

module.exports = maxChar;
