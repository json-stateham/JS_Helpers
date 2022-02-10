//SOLUTION 1:
const deepCopy = obj => {
  let aux = obj
  if (obj && typeof obj === 'object') {
    aux = new obj.constructor()
    Object.getOwnPropertyNames(obj).forEach(
      prop => (aux[prop] = deepCopy(obj[prop]))
    )
  }
  return aux
}

// SOLUTION 2:
const deepCopy = orig => {
  if (Array.isArray(orig)) {
    return orig.map(elem => deepCopy(elem))
  } else if (typeof orig === 'object' && orig !== null) {
    return Object.fromEntries(
      Object.entries(orig).map(([key, value]) => [key, deepCopy(value)])
    )
  } else {
    return orig
  }
}

//SOLUTION 3:
const deepCopyVik = obj =>
  typeof obj !== 'object' || obj === null
    ? obj
    : Object.keys(obj).reduce((acc, key) => {
        acc[key] = deepCopy(obj[key])
        return acc
      }, new obj.constructor())

//SOLUTION 4:
const deepCopyObj = JSON.parse(JSON.stringify(nestedArray))
