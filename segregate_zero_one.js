// Segregate 0s and 1s in an array

// Input array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
// Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1] 

// do xor swapping
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

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


let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
segregate(arr);
console.log(arr);
