// Given an array of numbers [1,2,3,4,5] and a number target 9.
// Return indices of the two numbers such that they add up to target or return -1.

const arr = [1, 2, 3, 4, 5];

const findTwoSum = (arr, target) => {
  const hash = new Map();

  for (let i = 0; i < arr.length; i += 1) {
    const diff = target - arr[i];
    if (hash.has(diff)) return [i, hash.get(diff)];    
    hash.set(arr[i], i);
  }
  
  return -1;
}

console.log(findTwoSum(arr, 9)) // [4, 3]