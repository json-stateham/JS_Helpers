// recursive
const fib = (n, a = 0, b = 1) => (n === 0 ? a : fib(n - 1, b, a + b));

console.log(fib(999));

// iterative
const fibonacci = limit => {
  let prev = 1n, next = 0n, swap;  

  while (limit) {
    swap = prev;
    prev = prev + next;
    next = swap;
    limit--;
  }
  
  return next;
};

console.log(fibonacci(999));
