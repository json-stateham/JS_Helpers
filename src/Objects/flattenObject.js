export const flattenObject = obj => {
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
