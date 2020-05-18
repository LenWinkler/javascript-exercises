/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    // change all chars to lowercase
    // use two hash tables to store chars and their counts
    // use alphabet string to filter out spaces and punctuation
    // loop over objA and check that objB contains each char with the correct count
    // then, loop over objB checking it against objA (in case objB has a char that isn't in objA)
    // if a char isn't in the other obj or the counts of that char are different, return false
    // else, return true after both loops are complete

    let objA = {};
    let objB = {};

    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (const char in stringA) {
        if (alphabet.includes(stringA[char])){
            if (stringA[char] in objA) {
                objA[stringA[char]] += 1;
            } else {
                objA[stringA[char]] = 1;
            }
        };
    };

    for (const char in stringB) {
        if (alphabet.includes(stringB[char])) {
            if (stringB[char] in objB) {
                objB[stringB[char]] += 1;
            } else {
                objB[stringB[char]] = 1;
            }
        };
    };

    for (const char in objA) {
        if (char in objB && objA[char] === objB[char]) {
            continue;
        } else {
            return false;
        }
    };

    for (const char in objB) {
        if (char in objA && objA[char] === objB[char]) {
            continue;
        } else {
            return false;
        }
    };

    return true;

}

module.exports = anagrams;
