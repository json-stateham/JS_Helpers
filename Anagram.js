// 1
const isAnagram1 = (a, b) => {
  a = a.toLowerCase().replace(/\W/g, '')
  b = b.toLowerCase().replace(/\W/g, '')

  if (a.length !== b.length) return false

  let hash = {}
  let i = -1, k = -1

  while (++i < a.length) {
    hash[a[i]] = hash[a[i]] + 1 || 1
  }

  while (++k < b.length) {
    if (hash[b[k]]) {
      hash[b[k]] - 1
    } else {
      return false
    }
  }

  return true
}
console.log(isAnagram1('finder', 'Fr * ;iend')) //true
console.log(isAnagram1('bye', 'Hi')) //false



//2 
const isAnagram2 = (a, b) => {
  a = a.toLowerCase().replace(/\W/g, '')
  b = b.toLowerCase().replace(/\W/g, '')

  if (a.length !== b.length) return false

  const makeHash = (param) => {
    const hash = {}
    for (let i = 0; i < param.length; i += 1) {
      hash[param[i]] = hash[param[i]] + 1 || 1
    }
    return hash
  }

  const hashA = makeHash(a)
  const hashB = makeHash(b)

  for (let key in hashA) {
    if (hashA[key] !== hashB[key]) return false
  }

  return true
}
console.log(isAnagram2('fiqnzder', 'Fr * ;iezqnd')) //true
console.log(isAnagram2('bye', 'Hi')) //false



// 3
const isAnagram3 = (a, b) => {
  if (typeof a !== 'string' || typeof b !== 'string') {
    console.warn('Arguments must be a string')
  }

  const sorted = x =>
    [...x.replace(/\W/g, '').toLowerCase()]
      .sort((a, b) => a.localeCompare(b))
      .join('')

  return sorted(a) === sorted(b)
}
console.log(isAnagram3('finder', 'Fr * ;iend')) //true
console.log(isAnagram3('bye', 'Hi')) //false



// 4
const isAnagram4 = (a, b) => {
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

console.log(isAnagram4('finder', 'Fr * ;iend')) //true
console.log(isAnagram4('bye', 'Hi')) //false