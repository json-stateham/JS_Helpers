export const deepCopy = obj => {
  let aux = obj;
  
  if (obj && obj.constructor.name === 'Object') {
    aux = new obj.constructor();
    for (const prop of Object.getOwnPropertyNames(obj)) {
      aux[prop] = deepCopy(obj[prop]);
    }
  }
  return aux;
};
