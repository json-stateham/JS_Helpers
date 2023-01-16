const matrix = (rows, columns) => {
  const jaggedArray = Array(rows).fill([]);

  for (let i = 0; i < columns; i += 1) {
    jaggedArray[i].push(i);
  }

  return jaggedArray;
};

console.log(matrix(3, 3));
// [ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ]
