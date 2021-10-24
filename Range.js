const range = (from, to, step) => {
  let res = []
  let backward = false

  if (from > to) {
    ;[from, to] = [to, from]
    backward = true
  }

  for (let i = from; i <= to; i += step) {
    res.push(i)
  }

  if (backward) {
    res.reverse()
    return res
  }

  return res
}

console.log(range(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(range(10, 1, 2)) // [9, 7, 5, 3, 1]

// Generate the alphabet
const alphabetGenerator = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(
  x => String.fromCharCode(x)
)
// ["A", "B", "C",  ... "X", "Y", "Z"]
