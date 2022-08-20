const factorial = n => {
  if (n === 0) return 1;
  else {
    const aux = factorial(n - 1);
    return n * aux;
  }
};

console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
