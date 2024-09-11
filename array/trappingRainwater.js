// https://www.geeksforgeeks.org/trapping-rain-water/


let arr = [3, 0, 1, 0, 4, 0, 2];
let arr1 = [3, 0, 2, 0, 4];
let arr2 = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];


// Using left and right array storing the max value from left side and right side
// and then finding the difference the min to calculate the water
function trappingRainwater1(arr) {
  let n = arr.length;
  let left = [];
  let right = [];
  let water = 0;

  left[0] = arr[0];
  right[n-1] = arr[n-1];

  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i-1], arr[i]);
  }

  for (let i = n-2; i >= 0; i--) {
    right[i] = Math.max(right[i+1], arr[i]);
  }


  for (let i = 0; i < n; i++) {
    water += Math.min(left[i], right[i])-arr[i];
  }
  return water;
}

console.log(trappingRainwater(arr));




