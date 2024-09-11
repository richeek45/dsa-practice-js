// https://www.geeksforgeeks.org/sort-array-wave-form-2/

let arr = [10, 5, 6, 3, 2, 20, 100, 80];
let arr2 = [10, 90, 49, 2, 1, 5, 23];

/**
 *  Follow the steps mentioned below to implement the idea:
    Traverse all even positioned elements of the input array, and do the following. 
    If the current element is smaller than the previous odd element, swap the previous and current. 
    If the current element is smaller than the next odd element, swap next and current.
 */
function waveform(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i+= 2) {
    if (i < n-1 && arr[i] < arr[i+1]) {
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    } else if (i > 0 && arr[i] < arr[i-1]) {
      [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
    }
  }

  console.log(arr);
}

waveform(arr2);