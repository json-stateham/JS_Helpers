const range = ({ start = 0, end = 9, step = 1 }) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};

range({ start: 1, end: 10, step: 2 }); // [1, 3, 5, 7, 9]

const alphabet = range({ start: 'A'.charCodeAt(), end: 'Z'.charCodeAt() }).map(
  charcode => String.fromCharCode(charcode)
);
// ["A", "B", "C",  ... "X", "Y", "Z"]
