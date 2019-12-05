/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str) {
    let strArr = str.split('');
    let caps = '';

    for (i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' ' || strArr[i] === [/^a-z/]) {
            caps += strArr[i]
        } else if (i === 0) {
            caps += strArr[i].toUpperCase()
        } else if (strArr[i - 1] === ' ') {
            caps += strArr[i].toUpperCase()
        } else {
            caps += strArr[i]
        }
    }

    return caps;
    
}

module.exports = capitalize;
