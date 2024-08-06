// Sort an array of 0s, 1s and 2s | Dutch National Flag problem
// https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

const arr = [ 0, 1, 2, 0, 1, 2 ];

function sort012(arr) {
  let n = arr.length;
  let x = 0, y = 0, z = 0;
  for (let i = 0; i < n; i++) {
      if (arr[i] === 0) {
          x++;
      } else if (arr[i] === 1) {
          y++;
      } else if (arr[i] === 2) {
          z++;
      }
  }
  
  let ind = 0;
  for(let i = 0; i < x; i++) {
    arr[ind++] = 0;
  }
  for(let i = 0; i < y; i++) {
    arr[ind++] = 1;
  }
  for(let i = 0; i < z; i++) {
    arr[ind++] = 2;
  }
}

function sort012b(arr) {
  let n = arr.length;
  let low = 0, high = n - 1;
  let mid = 0;

  while (mid <= high) {
      if (arr[mid] === 0) {
          [arr[low], arr[mid]] = [arr[mid], arr[low]];
          low++;
          mid++;
      } else if (arr[mid] === 1) {
          mid++;
      } else if (arr[mid] === 2) {
          [arr[mid], arr[high]] = [arr[high], arr[mid]];
          high--;
      }
  }
}

sort012b(arr);
console.log(arr);
