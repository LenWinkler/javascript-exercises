/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(n) {

    for (i = 0; i < n; i++) {
        i >= 3 && i % 3 === 0 && i % 5 === 0 ? console.log('fizzbuzz')
        : i >= 3 && i % 3 === 0 ? console.log('fizz')
        : i >= 5 && i % 5 === 0 ? console.log('buzz')
        : console.log(i)
    }

}

module.exports = fizzBuzz;
