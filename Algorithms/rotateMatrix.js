// Rotate a matrix to the left by 90 degrees.

// Rotate a matrix to the left by 90 degrees.

const rotateMatrix = mat => {
  const N = mat.length;

  for (let x = 0; x < N / 2; x += 1) {
    for (let y = x; y < N - x - 1; y += 1) {
      const temp = mat[x][y];
      const nx = N - 1 - x;
      const ny = N - 1 - y;

      mat[x][y] = mat[y][nx];
      mat[y][nx] = mat[nx][ny];
      mat[nx][ny] = mat[ny][x];
      mat[ny][x] = temp;
    }
  }

  return mat;
};

const matrix = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];

console.log(rotateMatrix(matrix));
/*
[
  [1,1,1],
  [0,0,1],
  [1,0,1]
]
*/
