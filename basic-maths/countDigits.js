/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
  // Function to check whether the number evenly divides n.
  evenlyDivides(n) {
    // code here
    let count = 0;
    let original = n;
    while (n > 0) {
      let digit = n % 10;
      if (digit != 0 && original % digit == 0) {
        count += 1;
      }
      n = Math.floor(n / 10);
    }
    return count;
  }
}
