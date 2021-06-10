const addition = (a, b) => {
  let result = 0
  let mask = 1
  let nextmask

  while (mask !== 0) {
    nextmask = mask << 1
    if (a & mask) { // If A has that bit set?
      // If result also has that bit set, set carry (next bit in result)
      if (result & mask) result ^= nextmask // This could also be |= instead of ^= .
      result ^= mask // Flip this bit in result
    }
    if (b & mask) { // If B has that bit set?
      // If result also has that bit set, set carry (next bit in result)
      if (result & mask) result ^= nextmask // This could also be |= instead of ^= .
      result ^= mask // Flip this bit in result
    }
    mask = nextmask
  }
  return result
}

console.log(addition(1, 3)) // 1 + 3 = 4