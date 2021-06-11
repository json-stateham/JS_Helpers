const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f'
  }
}

const get = (obj, path, defaultValue) =>
  path
    .split('.')
    .reduce((acc, el) => acc?.[el] ? acc[el] : defaultValue, obj)    

console.log(get(obj, 'a.b'))   // { c : 'd' }
console.log(get(obj, 'a.b.c')) // 'd'
console.log(get(obj, 'a.e'))   // 'f'
console.log(get(obj, 'x.x.e')) // undefined
console.log(get(obj, 'a.x.e', true)) // true
console.log(get(obj, 'a.x.e', 'My default value')) // My default value