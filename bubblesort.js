// bubble-sort
// place the largest, second largest, and so on in its order...



function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }

    }
  }
  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr));