/*
Let's compare the performance of binary and linear search
*/

const { performance } = require('perf_hooks');

const largeArray = [...Array(10000000).keys()];

// O(log n)
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const pivot = Math.floor((start + end) / 2);

    if (arr[pivot] === target) {
      return `Found: ${target} at index ${pivot}`;
    } else if (arr[pivot] < target) {
      start = pivot + 1;
    } else {
      end = pivot - 1;
    }
  }

  return false;
};

// O(n)
const linearSearch = (arr, target) => {
  let i = 0;

  while (++i < arr.length) {
    if (arr[i] === target) return `Found: ${target} at index ${i}`;
  }
};


const measurePerf =
  fn =>
  (...args) => {
    const before = performance.now();
    fn(...args);
    const after = performance.now() - before;

    console.log(`${fn.name}:`, after);
  };

measurePerf(binarySearch)(largeArray, 567841);
measurePerf(linearSearch)(largeArray, 567841);
