// Max product sub array

const arr1 = [6, -3, -10, 0, 2];
const arr2 = [1, -2, -3, 0, 7, -8, -2 ];


function maxSubArr(arr) {
  let maxSoFar = arr[0];
  let minEndingHere = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let temp = Math.max(Math.max(arr[i] * maxEndingHere, arr[i]), arr[i] * minEndingHere);
    minEndingHere = Math.min(Math.min(arr[i] * maxEndingHere, arr[i]), arr[i] * minEndingHere);
    maxEndingHere = temp;
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  console.log(maxSoFar);
}

maxSubArr(arr2);
