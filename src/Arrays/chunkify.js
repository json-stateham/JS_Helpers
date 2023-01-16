// 1
const chunkify = (array, chunkSize) => {
  const result = []

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, chunkSize + i))
  }

  return result
}

const array = [1, 2, 3, 4, 5, 6, 7]

console.log(chunkify(array, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunkify(array, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
