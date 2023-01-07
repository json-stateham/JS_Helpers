// Given an array of numbers [5, 1, 2, 4, 3] and a target number 9.
// Return two numbers so that their sum equals the target, or return -1.

const sumOfTwo = (array, target) => {
  const map = new Map();

  for (const num of array) {
    const diff = target - num;
    if (map.has(diff)) return [num, diff];
    map.set(num, true);
  }

  return -1;
};

console.log(sumOfTwo([5, 1, 2, 4, 3], 9)); // [4, 5]
