const someArray = [3, 14, 7, 11, 6, 1, 21, 9, 14, 15]

// sorting helper:
const merge = (left, right) => {
  let result = [];

  while (left.length || right.length) {

    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    } else if (left.length) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result
}

// main function
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr.length / 2
  const left = arr.slice(0, pivot)
  const right = arr.slice(pivot, arr.length)

  return merge(mergeSort(left), mergeSort(right))
};

mergeSort(someArray)