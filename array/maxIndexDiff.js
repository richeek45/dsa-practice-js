// https://www.geeksforgeeks.org/given-an-array-arr-find-the-maximum-j-i-such-that-arrj-arri/

// Given an array arr[] of N positive integers. 
// The task is to find the maximum of j – i subjected to the constraint of arr[i] <= arr[j].


let arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
let arr1 = [9, 2, 3, 4, 5, 6, 7, 8, 18, 0];
let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = [6, 5, 4, 3, 2, 1];

function findMaxIndexDiff(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] <= arr[j]) && (j - i) > max) {
        max = (j - i);
      }
    }
  }
  console.log(max);
}

function findMaxIndexDiff2(arr) {
  let n = arr.length;
  let maxFromEnd = new Array(n + 1);
  for (let i = 0; i < maxFromEnd.length; i++) {
    maxFromEnd[i] = Number.MIN_VALUE;
  }

  for (let i = n - 1; i >= 0; i--) {
    maxFromEnd[i] = Math.max(maxFromEnd[i+1], arr[i]);
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    let low = i + 1, high = n - 1, ans = i;
    while (low <= high) {
      let mid = parseInt((low + high) / 2, 10);
  
      if (arr[i] <= maxFromEnd[mid]) {
        ans = Math.max(ans, mid);
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    result = Math.max((ans - i), result);
  }
  console.log(result);
}

findMaxIndexDiff(arr3);
findMaxIndexDiff2(arr);