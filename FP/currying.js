const curry = fn => (fn.length === 0 ? fn() : p => curry(fn.bind(null, p)))

// usage
const sum = (a, b, c) => a + b + c

const sumAny = curry(sum)
const sum1 = curry(sum)(1)

const resultAny = sumAny(1)(10)(100)
const result1 = sum1(10)(100)

console.log(resultAny) // 111
console.log(result1) // 111
