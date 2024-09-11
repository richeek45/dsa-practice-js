let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

let matrix1 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30]
]

/**
 * There are four directions, dir = (x, y) row = [1...n], col=[1...n]
 * first move along the right row until 1. end of row or 2. col with val = 0
 * change the direction to down
 * 
 * 
 */

function withinBoundary(arr, x, y) {
  const row = arr.length;
  const col = arr[0].length;
  return (x >= 0 && x < row && y >= 0 && y < col && arr[x][y] !== 0)
}

function spiralMatrix(arr) {
  const dir = ['right', 'down', 'left', 'up'];
  let currDir = 'right';

  let row = 0, col = 0;

  while (withinBoundary(arr, row, col)) {
    if (currDir === dir[0]) {
      process.stdout.write(arr[row][col].toString()  + ' ');
      arr[row][col] = 0;
      if (withinBoundary(arr, row, col+1)) {
        col++;
      } else {
        currDir = dir[1];
        row++;
      }
    } else if (currDir === dir[1]) {
      process.stdout.write(arr[row][col].toString()  + ' ');
      arr[row][col] = 0;
      if (withinBoundary(arr, row+1, col)) {
        row++;
      } else {
        currDir = dir[2];
        col--;
      }
    } else if (currDir === dir[2]) {
      process.stdout.write(arr[row][col].toString()  + ' ');
      arr[row][col] = 0;
      if (withinBoundary(arr, row, col-1)) {
        col--;
      } else {
        currDir = dir[3];
        row--;
      }
    } else if (currDir === dir[3]) {
      process.stdout.write(arr[row][col].toString()  + ' ');
      arr[row][col] = 0;
      if (withinBoundary(arr, row-1, col)) {
        row--;
      } else {
        currDir = dir[0];
        col++;
      }
    }
  }

}

spiralMatrix(matrix1)