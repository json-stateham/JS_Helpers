/**
 * Reverses the digits of a given number.
 *
 * @param {number} num - The number to reverse.
 * @returns {number} The reversed number.
 *
 * @example
 * reverseNumber(123); // returns 321
 *
 * @example
 * reverseNumber(-123); // returns -321
 */
export const reverseNumber = (num: number): number => {
  let result = 0;

  while (num !== 0) {
    // get the last digit of a number by taking the remainder of dividing the number by ten.
    const right = num % 10;

    // get the "left" part by leaving only the integer part from dividing the number by 10.
    num = Math.floor(num / 10);

    // To add the right digit to result, we need to make the added digit occupy the next digit.
    // To do this, we need to multiply result by 10.
    result = result * 10 + right;
  }

  return result;
};
