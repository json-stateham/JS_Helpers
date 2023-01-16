const gcdEuclid = (m, n) => {
  if (m < n) {
    [m, n] = [n, m];
  }

  let remainder = m % n;

  if (remainder === 0) return n;

  while (remainder) {
    m = n;
    n = remainder;
    remainder = m % n;
  }

  return n;
};

console.log(gcdEuclid(119, 544)); // 17
