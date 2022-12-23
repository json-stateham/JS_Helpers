const deepFreeze = obj => {
  if (obj && obj.constructor.name === 'Object' && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(prop => deepFreeze(obj[prop]));
  }
  return obj;
};

const frozenObject = deepFreeze({
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
});

try {
  frozenObject.a = 11;
} catch (error) {
  console.error(error); // TypeError: Cannot assign to read only property 'a' of object '#<Object>'
} finally {
  console.log(frozenObject); // immutable
}
