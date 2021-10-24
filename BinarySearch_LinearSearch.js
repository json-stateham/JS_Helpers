/*
Let's compare the performance of binary and linear search
*/

const { performance } = require('perf_hooks')

const largeArray = Array.from(Array(10000000).keys())

// O(log n) - LOGARITHMIC RUNTIME
const binarySearch = (arr, target) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const pivot = Math.floor((start + end) / 2)

    if (arr[pivot] === target) {
      return `Found the target: ${target} at index ${pivot}`
    } else if (arr[pivot] < target) {
      start = pivot + 1
    } else {
      end = pivot - 1
    }
  }

  return false
}

// O(n) - LINEAR RUNTIME
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `Found the target: ${target} at index ${i}`
    }
  }
}

let beforeLinear = performance.now()
linearSearch(largeArray, 567841)
let afterLinear = performance.now()

let beforeBinary = performance.now()
binarySearch(largeArray, 567841)
let afterBinary = performance.now()

console.log('Linear search:', afterLinear - beforeLinear)
console.log('Binary search:', afterBinary - beforeBinary)
