// Find Second largest element in an array

// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.

// Input: arr[] = {10, 5, 10}
// Output: The second largest element is 5.

// Input: arr[] = {10, 10, 10}
// Output: The second largest does not exist.


// first iteration
function secondLargest(arr) {
  let l1 = 0, l2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l1) {
      l1 = arr[i];
    }
    if (arr[i] < l1 && arr[i] > l2) {
      l2 = arr[i];
    }
  }
  console.log(l1, l2);
}

let arr1 = [12, 35, 1, 10, 34, 1];
let arr2 = [10, 5, 10];
let arr3 = [10, 10, 10];

secondLargest(arr1);

