const tenArray = Array.from(Array(1000000).keys())

// O(n) - LINEAR RUNTIME
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `Found the target: ${target} at index ${i}`;
    }
  }
}

// O(log n) - LOGARITHMIC RUNTIME
const binarySearch = (arr, target) => {
  let startIndex = 0;
  let endIndex = (arr.length) - 1;

  while (startIndex <= endIndex) {

    let pivot = Math.floor((startIndex + endIndex) / 2);

    if (arr[pivot] === target) {
      return `Found the target: ${target} at index ${pivot}`;
    } else if (arr[pivot] < target) {
      startIndex = pivot + 1;
    } else {
      endIndex = pivot - 1;
    }
  }
  return false;
}

let beforeLinear = performance.now()
linearSearch(tenArray, 567841)
let afterLinear = performance.now()

let beforeBinary = performance.now()
binarySearch(tenArray, 567841)
let afterBinary = performance.now()

console.log('Milliseconds linear search:', afterLinear - beforeLinear)
console.log('Milliseconds binary search:', afterBinary - beforeBinary)

// RESULT:
// => 'Milliseconds linear search:' 2.185000106692314
// => 'Milliseconds binary search:' 0.054999953135848045