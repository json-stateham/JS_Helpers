/* 
Memoization is a technique for caching the results of expensive function calls to speed up 
computer programs by returning the cached result when the same data is re-entered.
*/

const memoize = fn => {
  const cache = new Map();

  return x => {
    if (cache.has(x)) return cache.get(x);
    cache.set(x, fn(x));
    return cache.get(x);
  };
};

// unoptimized algorithm
function fibbo(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fibbo(n - 2) + fibbo(n - 1);
}

// fast with memoization
fibbo = memoize(fibbo);
console.log(fibbo(45));
