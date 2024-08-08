// Max product sub array
// https://www.geeksforgeeks.org/maximum-product-subarray/

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

function maxSubArr1(arr) {
  let n = arr.length;
  let leftToRight = 1;
  let rightToLeft = 1;
  let res = -Infinity;
  for (let i = 0; i < n; i++) {
    if (leftToRight === 0) {
      leftToRight = 1;
    }
    if (rightToLeft === 0) {
      rightToLeft = 1;
    }

    leftToRight *= arr[i];
    rightToLeft *= arr[i];
    res = Math.max(Math.max(leftToRight, rightToLeft), res);
  }
  console.log(res);
}

maxSubArr1(arr2);
