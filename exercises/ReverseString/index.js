/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str) {
    /**
     * Iterate over the string, starting at last char
     * append chars to return str
     * return the finished str
     */

    let reversed_str = '';

    for (var i = str.length - 1; i > -1; i--) {
        reversed_str += str[i]
    };

    return reversed_str;

}

module.exports = reverse;
