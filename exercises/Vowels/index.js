/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(string) {
    // use counter var
    // iterate over string, incrementing counter for each vowel
    // return counter

    let counter = 0;
    let vowels = 'aeiou';
    let vowelList = new Set(vowels);

    for (let i = 0; i < string.length; i++) {
        if (vowelList.has(string[i].toLowerCase())) {
            counter++;
        }
    };

    return counter;

}

module.exports = vowels;
