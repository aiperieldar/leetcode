/* Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false */

var isPowerOfThree = function(n) {
    while (n > 1) {
        n /= 3;
    }
    if(n === 1) {
        return true;
    } else {
        return false;
    }
};
