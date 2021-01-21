//a huge array of 99 items I need to split into groups of 10

const hugeArray = Array.from({ length: 99 }, (_, i) => i)

const chunkify = (array, chunkSize = 10) => {
  const chunks = Array.from(
    { length: Math.ceil(array.length / chunkSize) },
    (_, i) => {
      const start = chunkSize * i
      return array.slice(start, start + chunkSize)
    }
  )
  return chunks
}

console.log(chunkify(hugeArray))