// Find the row with maximum number of 1s
const arr = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
]

// all the rows are sorted
// find the index where arr[i] = 1 && arr[i-1] = 0
// subtract from row length -> n - index -> no of 1's
// do that for all rows and calculate max

function firstOne(arr, low, high) {
  while(low <= high) {
    let mid = low + parseInt((high - low) / 2);
    if ((arr[mid-1] === 0 || mid === 0) && arr[mid] === 1) {
      return mid;
    } else if (arr[mid] === 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// O(M * logN) -> M - row, N - col
function rowWithMax1s(arr) {
  let r = arr.length;
  let c = arr[0].length;
  let maxValue = Number.MIN_VALUE;
  let maxIndex = -1;

  for (let i = 0; i < r; i++) {
    let index = firstOne(arr[i], 0, c-1);
    let count = c - index;
    if (index !== -1 && count > maxValue) {
      console.log(c, index);
      maxValue = count;
      maxIndex = i;
    }
  }

  return [maxValue, maxIndex];
}

// Start from the top-right cell(row = 0, col = N – 1) and store the ans = -1. 
// If the value in the current cell is 1, update ans with the current row and move left. 
// Otherwise, if the current cell is 0, move to the next row:
// If mat[row][col] == 1, update ans = row and move left by col = col – 1.
// Else if mat[row][col] == 0, row = row + 1.

function rowWithMax1sbetter(arr) {
  const R = arr.length, C = arr[0].length;
  let row = 0, col = arr[0].length - 1;
  let count = 0;

  while(row <  R && col >= 0) {
    if (arr[row][col] === 0) {
      row++;
    } else if (arr[row][col] === 1) {
      col--;
      count++;
    }
  }
  
  return count;
} 

// console.log(rowWithMax1s(arr));
console.log(rowWithMax1sbetter(arr));