// Convert the given number into a roman numeral.
// convertToRoman(798) should return "DCCXCVIII"

//SOLUTION 1:
const convertToRoman = num => {
    const decimalNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let result = '';

    for (let idx = 0; idx < decimalNums.length; idx += 1) {
        while (decimalNums[idx] <= num) {
            result += romanNums[idx];
            num -= decimalNums[idx];
        }
    }
    return result;
};

convertToRoman(798) // -> DCCXCVIII