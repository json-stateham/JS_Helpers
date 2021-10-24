/*
need to transform fields of objects in an array of objects
*/

const inputArray = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 },
]
// Desired result > [{ width: 10, height: 20 }]

// solution 1
const arrayDimension1 = array =>
  array.reduce((result, item) => ({ ...result, [item.name]: item.value }), {})

// solution 2
const arrayDimension2 = array => {
  const result = {}

  array.forEach(item => (result[item.name] = item.value))

  return result
}
