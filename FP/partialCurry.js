const partialCurry = (fn, len = fn.length) =>
  len === 0 ? fn() : (...p) => partialCurry(fn(null, ...p), len - p.length)

// fn with fixed params length
const sum3 = (a, b, c) => a + b + c

const sum3result = partialCurry(sum3)(8, 7)
console.log(sum3result(5)) // 20

// fn with flexible params length
const sumAny = (...args) => args.reduce((x, y) => x + y, 0)

const sumResult = partialCurry(sumAny, 5)

console.log(
  sumResult(1)(2)(3)(4)(5),
  sumResult(1)(2)(3, 4, 5),
  sumResult(1, 2, 3, 4, 5)
)
