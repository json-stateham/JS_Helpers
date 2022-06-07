const deepCopy = obj => {
  let aux = obj;
  if (!!obj && obj.constructor.name === 'Object') {
    aux = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach(
      prop => (aux[prop] = deepCopy(obj[prop]))
    )
  }
  return aux
}
