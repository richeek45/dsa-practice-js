// 74. Search a 2D Matrix



function searchMatrix(matrix, target) {
  
  let i = 0, j = 0;
  let row = matrix.length, col = matrix[0].length;
  while (i < row && j < col) {
    if (matrix[i][j] === target) {
      return true;
    }

    if (i === row - 1) {
      j++;
      continue;
    }

    if (j === col - 1) {
      i++;
      continue;
    }

    let maxDiagonal = Math.max(matrix[i+1][j], matrix[i][j+1]);
    if (maxDiagonal < target) {
      i++;
    } else if (maxDiagonal > target) {
      j++;
    }
  }
  return false;
}

let matrix1 = [[1,3,5,7], [10,11,16,20], [23,30,34,60]];
let target1 = 30;

console.log(searchMatrix(matrix1, target1));