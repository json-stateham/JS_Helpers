/*
  Given an integer, return an integer that is the reverse
  ordering of numbers.
*/

const reverseNumber = num =>
  parseInt(
    num.toString().split('').reverse().join('')
  ) * Math.sign(num)

console.log(
  reverseNumber(15), // 51
  reverseNumber(981), // 189
  reverseNumber(500), // 5
  reverseNumber(-15), // -51
  reverseNumber(-90) // -9
)
