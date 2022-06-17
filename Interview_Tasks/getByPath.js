/*
Given a nested object and a string like "a.b.c", 
write a function that will access the nested 
fields of the object using a string path.
*/

const obj = {
  a: {
    b: {
      c: 'd',
    },
    e: 0,
  },
}

const getByPath = (
  data,
  path,
  defaultValue = 'Not found'
) =>
  path
    .split('.')
    .reduce(
      (result, item) => (result[item] ?? defaultValue),
      data
    )

console.log(getByPath(obj, 'a.b')); // { c : 'd' }
console.log(getByPath(obj, 'a.b.c')); // 'd'
console.log(getByPath(obj, 'a.e')); // 0
console.log(getByPath(obj, 'x.x.e')); // 'Not found'
console.log(getByPath(obj, 'a.x.e', 'Default')); // 'Default'
