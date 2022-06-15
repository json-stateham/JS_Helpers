/*
  all primes are of the form 6k ± 1, with the exception of
  2 and 3 where k is some integer. Here’s an example:
  5 = (6-1) , 7 = ((1*6) + 1), 13 = ((2*6) + 1)
*/

export const isPrime = n => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};
