/*
write an implementation of an Array.prototype.flat
*/

const nestedArray = [1, 2, [3, 4, [5]]]
// desired result: [1, 2, 3, 4, 5]

// solution 1
const flattenArray1 = array =>
  array.reduce(
    (acc, el) => (Array.isArray(el) ? acc.concat(...el) : [...acc, el]),
    []
  )

// solution 2
const flattenArray2 = array => {
  const result = []
  let idx = -1

  while (++idx < array.length) {
    let value = array[idx]

    if (Array.isArray(value)) {
      result = result.concat.apply(result, value)
    } else {
      result.push(value)
    }
  }

  return result
}
