const algoEuclid = (m, n) => {
    let remainder = m % n;
    if (remainder === 0) return n;
    while (remainder) {
      m = n;
      n = remainder;
      remainder = m % n;
    }
    return n;
  }
  
  console.log(algoEuclid(252, 105))