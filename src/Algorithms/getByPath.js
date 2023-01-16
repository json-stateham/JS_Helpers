/*
Given a nested object and a string like "a.b.c", 
write a function that will access the nested 
fields of the object using a string path.
*/

const getByPath = (obj, path, defaultValue = 'Not found') =>
  path.split('.').reduce((result, item) => result[item] ?? defaultValue, obj);

const exampleObj = {
  a: {
    b: {
      c: 'd',
    },
    e: 0,
  },
};

console.log(getByPath(exampleObj, 'a.b')); // { c : 'd' }
console.log(getByPath(exampleObj, 'a.b.c')); // 'd'
console.log(getByPath(exampleObj, 'a.e')); // 0
console.log(getByPath(exampleObj, 'x.x.e')); // 'Not found'
console.log(getByPath(exampleObj, 'a.x.e', 'Default')); // 'Default'
