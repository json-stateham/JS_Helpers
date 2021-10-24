/*
Given a nested object and a string like "a.b.c", 
you need to write a function that will access the nested 
fields of the object using a string, you also need to 
add the ability to pass the default value as the third argument, 
which is returned if the field does not exist.
*/

const obj = {
  a: {
    b: {
      c: 'd',
    },
    e: 'f',
  },
}

const accessObjectByStringPath = (
  data,
  stringPath,
  defaultValue = 'Not found'
) =>
  stringPath
    .split('.')
    .reduce(
      (result, item) => (result?.[item] ? result[item] : defaultValue),
      data
    )

console.log(accessObjectByStringPath(obj, 'a.b'))
// { c : 'd' }

console.log(accessObjectByStringPath(obj, 'a.b.c'))
// 'd'

console.log(accessObjectByStringPath(obj, 'a.e'))
// 'f'

console.log(accessObjectByStringPath(obj, 'x.x.e'))
// 'Not found'

console.log(accessObjectByStringPath(obj, 'a.x.e', 'My default value'))
// My default value
