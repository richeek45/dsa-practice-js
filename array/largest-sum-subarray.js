// Largest Sum Contiguous Subarray (Kadane’s Algorithm)

const arr = [-2,-3,4,-1,-2,1,5,-3];

function largestSumArray(arr) {
  let n = arr.length;
  let left = 0, right = 0;
  let sum = 0, max = 0;
  while(right < n) {
    sum += arr[right++];

    if (sum < 0) {
      sum = 0;
      left = 0;
    }

    if (sum > max) {
      max = sum;
    }
  }

  console.log(max);
}

largestSumArray(arr);
