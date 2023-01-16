const flattenObject = obj => {
  const result = {};

  const flattener = (obj, propName = '') => {
    if (typeof obj !== 'object') {
      result[propName] = obj;
      return;
    }

    for (const prop of Object.keys(obj)) {
      if (propName) {
        flattener(obj[prop], `${propName}.${prop}`);
      } else {
        flattener(obj[prop], prop);
      }
    }
  };
  flattener(obj);

  return result;
};

const dictionary = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '3',
      e: '1',
    },
  },
};

console.log(flattenObject(dictionary));
// result: {'Key1': '1', 'Key2.a': '2','Key2.b' : '3', 'Key2.c.d' : '3', 'Key2.c.e' : '1'}