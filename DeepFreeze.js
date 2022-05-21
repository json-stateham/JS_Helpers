const deepFreeze = obj => {
  if (obj && obj.constructor.name === 'Object' && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(prop => deepFreeze(obj[prop]));
  }
  return obj
}

const someObj = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}

deepFreeze(someObj)

someObj.a = 11
someObj.c.d = 33

console.log(someObj) // immutable
