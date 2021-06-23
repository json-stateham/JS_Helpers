// 1
const isAnagram1 = (a, b) => {
  if (typeof a !== 'string' || typeof b !== 'string') {
    console.warn('Arguments must be a string')
  }

  const sorted = x =>
    [...x.replace(/\W/g, '').toLowerCase()]
      .sort((a, b) => a.localeCompare(b))
      .join('')

  return sorted(a) === sorted(b)
}

console.log(isAnagram1('finder', 'Fr * ;iend')) //true
console.log(isAnagram1('bye', 'Hi')) //false

// 2
const isAnagram2 = (a, b) => {
  if (typeof a !== 'string' || typeof b !== 'string') {
    console.warn('Arguments must be a string')
  }

  const prepared = str => [...str.replace(/\W/g, '').toLowerCase()]

  const countHash = (param) =>
    prepared(param).reduce((acc, el) => {
      acc[el] = acc[el] + 1 || 1
      return acc
    }, {})

  const countedA = countHash(a)
  const countedB = countHash(b)

  if (Object.keys(countedA).length !== Object.keys(countedB).length) return false

  for (let key in countedA) {
    if (countedA[key] !== countedB[key]) return false
  }

  return true
}

console.log(isAnagram2('finder', 'Fr * ;iend')) //true
console.log(isAnagram2('bye', 'Hi')) //false