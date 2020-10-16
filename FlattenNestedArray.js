//Flatten a nested array.You must account for varying levels of nesting.
//Напишите функцию, которая преобразует глубокий массив в одномерный.


//SOLUTION 1:

const flatten = array =>
 array.reduce((acc, el) => 
  Array.isArray(el) 
  ? acc.concat(...el)
  : [...acc, el]
 , [])

const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]


//SOLUTION 2:
const flattenArray = (arr) => {
  let flat = [].concat(...arr)
  return flat.some(Array.isArray) ? flattenArray(flat) : flat
}

flattenArray([1, [2], [3, [[4]]]]) // -> [1, 2, 3, 4]

//SOLUTION 3:
const flattenArray = (val, flatArr = []) => {
  val.forEach((item) =>
    Array.isArray(item) ? flattenArray(item, flatArr) : flatArr.push(item)
  )
  return flatArr
}

//SOLUTION 4:
const arr = [1, 2, [3, 4, [5, 6]]]

const flatDeep = (arr, d = 1) => {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice()
}

flatDeep(arr, Infinity) // -> [1, 2, 3, 4, 5, 6]

//SOLUTION 5:
const flatten = (arr, result = []) => {
  arr.forEach((i) =>
    Array.isArray(i) ? result.push(...flatten(i)) : result.push(i)
  )
  return result
}

const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

flatten5(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
