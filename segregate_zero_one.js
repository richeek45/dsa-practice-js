// Segregate 0s and 1s in an array

// Input array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
// Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1] 

// do xor swapping
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 1 full iteration O(n)
function segregate(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // swap last index with value 1
      swap(arr, i, index);
      index++;
    }
  }
}


// n/2 iterations O(n)
function segregate2(arr) {
  // 2 pointer approach
  let left = 0, right = arr.length - 1;

  while (left < right) {
    // shift to right till finding first 1
    while (arr[left] === 0 && left < right) {
      left++;
    }

    // shift to the left till finding first 0
    while (arr[right] === 1 && left < right) {
      right--;
    }

    // swap the 1 on the left with 0 on the right
    swap(arr, left, right);
    
  }

}


let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
segregate2(arr);
console.log(arr);
