// given a matrix, print the elements in a spiral order

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const matrixSpiral = (matrix) => {
  const result = [];

  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      result.push(matrix[top][i]);
    }

    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      result.push(matrix[i][right]);
    }

    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        result.push(matrix[bottom][i]);
      }

      bottom -= 1;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        result.push(matrix[i][left]);
      }

      left += 1;
    }
  }

  return result;
};

matrixSpiral(matrix);
