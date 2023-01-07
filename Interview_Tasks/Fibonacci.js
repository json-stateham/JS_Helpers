// recursive
const fib = (n, a = 0, b = 1) => (n === 0 ? a : fib(n - 1, b, a + b));

console.log(fib(999));

// iterative
const fibonacci = n => {
  let a = 1;
  let b = 0;
  let c = 0;

  while (n > 0) {
    c = a + b;
    b = a;
    a = c;
    n--;
  }
  
  return b;
};

console.log(fibonacci(999));
