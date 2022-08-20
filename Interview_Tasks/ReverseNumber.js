/*
  Given an integer, return an integer that is the reverse
  ordering of numbers.
*/

const sum = (a, b) => a + b;

const reverseNumber = number =>
  parseInt(`${number}`.split('').reduceRight(sum)) * Math.sign(number);

console.log(reverseNumber(15)); // 51
console.log(reverseNumber(981)); // 189
console.log(reverseNumber(500)); // 5
console.log(reverseNumber(-15)); // -51
console.log(reverseNumber(-90)); // -9
