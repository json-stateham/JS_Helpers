const quickSort = array => {
  if (!Array.isArray(array)) {
    throw new TypeError('Must be an array')
  }

  if (array.length === 0) return array

  const lesser = []
  const equal = []
  const greater = []

  const pivot = array[0]

  array.forEach(num => {
    if (num < pivot) {
      lesser.push(num)
    } else if (num > pivot) {
      greater.push(num)
    } else {
      equal.push(num)
    }
  })

  return [...quickSort(lesser), ...equal, ...quickSort(greater)]
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 92]))
//[1,2,4,8,92,123,345]
