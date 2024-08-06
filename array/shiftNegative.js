// shift negative values to the front



const arr1 = [-1, 2, -3, 4, 5, 6, -7, 8, 9 ];



function shift(arr) {
  let n = arr.length;

  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  console.log(arr);
}

// two pointer approach
function shift2(arr) {
  let n = arr.length;

  let left = 0, right = n - 1;

  while(left <= right) {
    if (arr[left] < 0 && arr[right] < 0) {
      left++;
    } else if (arr[left] > 0 && arr[right] > 0) {
      right--;
    } else if (arr[left] > 0 && arr[right] < 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else {
      left++;
      right--;
    }
  }
  console.log(arr);

}

// shift(arr1);
shift2(arr1);



