//Flatten a nested array.You must account for varying levels of nesting.

//SOLUTION 1:
const flattenArray = (arr) => {
  let flat = [].concat(...arr)
  return flat.some(Array.isArray) ? flattenArray(flat) : flat
}

flattenArray([1, [2], [3, [[4]]]]) // -> [1, 2, 3, 4]

//SOLUTION 2:
const flattenArray = (val, flatArr = []) => {
  val.forEach((item) => {
    if (Array.isArray(item)) flattenArray(item, flatArr)
    else flatArr.push(item)
  })
  return flatArr
}
