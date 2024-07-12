


// Input : [4, 7, 3, 2, 4, 6, 3, 2] Output: [2, 2, 3, 3, 4, 4, 6, 7]

const nums = [4, 7, 3, 2, 4, 6, 3, 2]

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function orderDuplicates(arr) {

  let ind = 0; // first ordered index
  for (let i = 1; i < arr.length; i++) {

    if (arr[i] < arr[i-1]) {
      // shift the number in the left until order is maintained
      // until arr[i-1] < arr[i]
      let index = i;
      while(index > 0 && arr[index-1] > arr[index]) {
        swap(arr, index, index - 1);
        index--;
      }
    }
  }

  console.log(nums);
}

orderDuplicates(nums);