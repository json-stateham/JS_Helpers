// 1
const chunkify1 = (array, size) => {
  const result = []

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, size + i))
  }

  return result
}

const data = [1, 2, 3, 4, 5, 6, 7]
console.log(chunkify1(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunkify1(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]


//2
const hugeArray = Array.from({ length: 10 }, (_, i) => i)

const chunkify2 = (array, chunkSize = 2) => {
  const chunks = Array.from(
    { length: Math.ceil(array.length / chunkSize) },
    (_, i) => {
      const start = chunkSize * i
      return array.slice(start, start + chunkSize)
    }
  )
  return chunks
}

console.log(chunkify2(hugeArray))