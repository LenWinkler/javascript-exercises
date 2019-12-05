/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int) {

    let reversedArr = [];
    let intArray = int.toString().split('');

    for(i = intArray.length - 1; i > 0; i++) {
        if (intArray[i] === [/^0-9/]) {
            reversedArr.shift(intArray[i])
        } else {
            reversedArr.push(intArray[i])
        }
    }

    return reversedArr.join('').parseInt();

}

module.exports = reverse;
