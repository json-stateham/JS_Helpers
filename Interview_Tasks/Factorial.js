const factorial = n => {
  if (n === 0) {
    return 1
  } else {
    const aux = factorial(n - 1)
    return n * aux
  }
}

const fact100 = factorial(100)
console.log(fact100)
