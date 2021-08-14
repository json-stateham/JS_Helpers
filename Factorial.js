//1
const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1))

factorial(10)

//2
const range = (start, stop) =>
  Array(stop - start).fill(0).map((v, i) => start + i)


const factorialByRange = n => range(1, n + 1).reduce((x, y) => x * y, 1)

console.log(factorialByRange(5)) //120