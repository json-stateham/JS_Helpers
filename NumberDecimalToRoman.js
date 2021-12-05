// Convert the given number into a roman numeral.

//SOLUTION:
const numberDecimalToRoman = num => {
  const decimalRomanMap = new Map()
    .set(1000, 'M')
    .set(900, 'CM')
    .set(500, 'D')
    .set(400, 'CD')
    .set(100, 'C')
    .set(90, 'XC')
    .set(50, 'L')
    .set(40, 'XL')
    .set(10, 'X')
    .set(9, 'IX')
    .set(5, 'V')
    .set(4, 'IV')
    .set(1, 'I')

  let result = ''

  decimalRomanMap.forEach((romans, decimal) => {
    while (decimal <= num) {
      result += romans
      num -= decimal
    }
  })

  return result
}

console.log(numberDecimalToRoman(1)) // -> I
console.log(numberDecimalToRoman(798)) // -> DCCXCVIII
console.log(numberDecimalToRoman(2021)) // -> MMXXI
