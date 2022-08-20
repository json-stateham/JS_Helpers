// Given an array of numbers [5, 1, 2, 4, 3] and a target number 9.
// Return two numbers so that their sum equals the target, or return -1.

const twoNumbersEqualsTarget = (arr, target) => {
  const hash = new Map();

  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];
    const diff = target - current;
    if (hash.has(diff)) return [current, diff];
    hash.set(current, i);
  }

  return -1;
};

console.log(twoNumbersEqualsTarget([5, 1, 2, 4, 3], 9)); // [4, 5]
