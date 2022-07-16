// Given a matrix representing a tic-tac-toe board,
// determine whether someone won, whether it was a tie,
// or whether the game has not ended yet.

// SOLUTION 1:
const checkRow = (row, letter) => row.every(rowLetter => rowLetter === letter);

const checkColumn = (boardMatrix, colIndex, letter) =>
  boardMatrix.every(row => row[colIndex] === letter);

const checkLeftToRightDiagonal = (boardMatrix, letter) =>
  boardMatrix.every((row, i) => row[i] === letter);

const checkRightToLeftDiagonal = (boardMatrix, letter) =>
  boardMatrix.every(
    (row, i, selfArr) => row[selfArr.length - (i + 1)] === letter
  );

const checkWinner = (boardMatrix, letter) => {
  const winRow =
    checkRow(boardMatrix[0], letter) ||
    checkRow(boardMatrix[1], letter) ||
    checkRow(boardMatrix[2], letter);

  const winCol =
    checkColumn(boardMatrix, 0, letter) ||
    checkColumn(boardMatrix, 1, letter) ||
    checkColumn(boardMatrix, 2, letter);

  return (
    winRow ||
    winCol ||
    checkLeftToRightDiagonal(boardMatrix, letter) ||
    checkRightToLeftDiagonal(boardMatrix, letter)
  );
};

const ticTacToeBoard1 = [
  ['O', '-', 'X'],
  ['-', 'O', '-'],
  ['-', 'X', 'O'],
];

const ticTacToeBoard2 = [
  ['O', 'X', '-'],
  ['-', 'X', 'O'],
  ['O', 'X', '-'],
];

const ticTacToeBoard3 = [
  ['X', 'O', '-'],
  ['-', 'X', 'O'],
  ['O', 'X', 'X'],
];

console.log(checkWinner(ticTacToeBoard1, 'X')); // false
console.log(checkWinner(ticTacToeBoard1, 'O')); // true

console.log(checkWinner(ticTacToeBoard2, 'X')); // true
console.log(checkWinner(ticTacToeBoard2, 'O')); // false

console.log(checkWinner(ticTacToeBoard3, 'X')); // true
console.log(checkWinner(ticTacToeBoard3, 'O')); // false
