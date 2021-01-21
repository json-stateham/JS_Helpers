const range = (start, stop, step) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step)
}

// range 0..4
range(0, 4, 1)
// [0, 1, 2, 3, 4]

// range 1..10 with step of 2
range(1, 10, 2)
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from 
//making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x)
)
// ["A", "B", "C",  ... "X", "Y", "Z"]
