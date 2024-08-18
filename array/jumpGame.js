// Jump Game – Minimum Jumps to Reach End
// https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/ 

const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
const arr1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const arr2 = [2,3,1,1,4];
const arr3 = [2,3,1];

function jumpGame(arr) {
  let count = 0;
  let left = 0, right = 0;
  while(right < arr.length - 1) {
    let index = right;
    for (let i = left; i <= right; i++) {
      if (arr[i] + i > index) {
        index = arr[i] + i;
      }
    }
    right = index;
    count++;
  }

  console.log(count);
}

jumpGame(arr);
