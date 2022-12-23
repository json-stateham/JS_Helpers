const deepCopy = obj => {
  let aux = obj;
  
  if (obj && obj.constructor.name === 'Object') {
    aux = new obj.constructor();
    for (const prop of Object.getOwnPropertyNames(obj)) {
      aux[prop] = deepCopy(obj[prop]);
    }
  }
  return aux;
};

const original = {
  a: 1,
  b: {
    c: 2,
  },
};

const copy = deepCopy(original);
copy.b.c = 3;

console.log("original hasn't mutated: ", original);
console.log('copy: ', copy);
