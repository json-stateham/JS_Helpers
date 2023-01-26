// convert the given number to a Roman numeral

export const convertDecimalToRoman = (num: number): string => {
  const numerals = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ])

  if (numerals.has(num)) return numerals.get(num) as string

  let result = ''

  for (const [decimal, roman] of numerals) {
    while (decimal <= num) {
      result += roman
      num -= decimal
    }
  }

  return result
}
