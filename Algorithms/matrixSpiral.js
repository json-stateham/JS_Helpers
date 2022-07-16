// given a matrix, print the elements in a spiral order

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const matrixSpiral = m => {
  let topRow = 0,
    leftCol = 0,
    rightCol = m[0].length - 1,
    btmRow = m.length - 1;

  while (topRow < btmRow && leftCol < rightCol) {
    for (let col = 0; col <= rightCol; col += 1) {
      console.log(m[topRow][col]);
    }

    topRow += 1;

    for (let row = topRow; row <= btmRow; row += 1) {
      console.log(m[row][rightCol]);
    }

    rightCol -= 1;

    if (topRow <= btmRow) {
      for (let col = rightCol; col >= 0; col -= 1) {
        console.log(m[btmRow][col]);
      }

      btmRow -= 1;
    }

    if (leftCol <= rightCol) {
      for (let row = btmRow; row > topRow; row -= 1) {
        console.log(m[row][leftCol]);
      }

      leftCol += 1;
    }
  }
};

matrixSpiral(matrix);
