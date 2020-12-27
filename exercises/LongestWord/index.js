/**
* Longest Word
*
* Write a function that returns the longest word in the passed sentence.
* If there are two or more words that are the same length, return
* the first word from the string with that length. Ignore punctuation
* and assume sentence will not be empty.
*
* Examples:
* longestWord("Hello there") === "Hello"
* longestWord("My name is Adam") === "name"
* longestWord("fun&!! time") === "time"
*/

function longestWord(sen) {
    const wordsList = sen.split(' ');
    let longest = '';

    const removePunctuation = word => {
        const regex = /[-\.!?,&;:'\(\)\[\]]/g;
        wordWithoutPunc = word.replace(regex, '');

        return wordWithoutPunc;
    }

    for (const word in wordsList) {
        const wordWithoutPunc = removePunctuation(wordsList[word]);
        if (wordWithoutPunc.length > longest.length) {
            longest = wordWithoutPunc;
        }
    }

    return longest;
}

module.exports = longestWord;
