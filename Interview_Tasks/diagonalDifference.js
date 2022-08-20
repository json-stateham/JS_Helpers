/* Given a square matrix, calculate the absolute difference 
   between the sums of its diagonals.

[
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
] 

The left-to-right diagonal = 1 + 5 + 9 = 15. 
The right to left diagonal = 3 + 5 + 9 = 17. 
Their absolute difference is |15 - 17| = 2.
*/

const diagonalDifference = squareMatrix => {
  const leftRightDiagonal = squareMatrix.reduce(
    (sum, current, i) => sum + current[i],
    0
  );

  const rightLeftDiagonal = squareMatrix.reduce(
    (sum, current, i) => sum + current[current.length - (1 + i)],
    0
  );

  return Math.abs(leftRightDiagonal - rightLeftDiagonal);
};

const squareMatrixExample = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(squareMatrixExample)); // 2
