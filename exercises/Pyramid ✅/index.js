/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n) {
    // build top level of pyramid, an array containing a '#' with n-1 spaces on each side
    // two pointers start at initial '#'
    // at each level, L moves left one space and R moves right
    // the spaces at L and R are replaced with '#', the array is joined and the current level is printed
    // continue until the pointers are at each end of the array

    let level = ['#'];

    for (let i = 0; i < n - 1; i++) {
        level.unshift(' ');
    }

    for (let i = 0; i < n - 1; i++) {
        level.push(' ');
    }

    let start = level.indexOf('#');
    let L = start;
    let R = start;

    while (L >= 0) {
        level[L] = '#';
        level[R] = '#';

        console.log(level.join(''));

        L--;
        R++;
    }
}

module.exports = pyramid;
