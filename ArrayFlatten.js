// 1
const flatten1 = array =>
 array.reduce((acc, el) => 
  Array.isArray(el) 
  ? acc.concat(...el)
  : [...acc, el]
 , [])

console.log(flatten1([1, 2, [3, 4, [5]]])); // [1, 2, 3, 4, 5]


//2
const flatten2 = (array) => {
  let result = []
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

console.log(flatten2([1, 2, [3, 4, [5]]])) // [1, 2, 3, 4, 5]
