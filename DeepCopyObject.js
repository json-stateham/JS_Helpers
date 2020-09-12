//SOLUTION 1:

const deepCopyObj = JSON.parse(JSON.stringify(nestedArray))

//SOLUTION 2:

const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let newObj = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    newObj[key] = deepCopy(obj[key])
  }

  return newObj
}

//SOLUTION 3:

let deepCopyVik = (obj) =>
  typeof obj !== 'object' || obj === null
    ? obj
    : Object.keys(obj).reduce((acc, key) => {
        acc[key] = deepCopy(obj[key])
        return acc
      }, new obj.constructor())
