//SOLUTION 1:
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2))

fibonacci(10)

//SOLUTION 2:
const fibonacci1 = (n) => {
  if (n <= 2) return 1
  return fibonacci1(n - 1) + fibonacci1(n - 2)
}

fibonacci1(14)

//SOLUTION 3:
const fibonacci2 = (n) => {
  let a = 1
  let b = 0
  let c = 0
  while (n > 0) {
    c = a + b
    b = a
    a = c
    n--
  }
  return b
}

fibonacci2(14)
