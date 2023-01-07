// Check whether there are any duplicates in an array of integers using sets

const checkDuplicates = arr => new Set(arr).size < arr.length;

console.log(checkDuplicates([1, 2, 3, 4, 5])); // false
console.log(checkDuplicates([1, 1, 2, 3, 4, 5])); // true
