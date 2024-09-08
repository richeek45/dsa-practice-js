// https://www.geeksforgeeks.org/minimize-the-maximum-difference-between-the-heights/

let arr = [1, 10, 15], k = 6;

/**
 * Given the heights of N towers and a value of K, 
 * Either increase or decrease the height of every tower by K (only once) where K > 0.
 * After modifications, the task is to minimize the difference 
 * between the heights of the longest and the shortest tower and output its difference.
 */

/**
 * First sort. Then minimum = arr[0], maximum = arr[n-1]
 * In every iteration, 
 * after adding min + k, there could be a new minimum = arr[i] - k
 * after subtracting max - k, there could be a new maximum arr[i] + k
 * find minimum in every iteration
 */

function minimumHeights(arr, k) {
  let n = arr.length;
  arr.sort();
  let height = arr[n-1] - arr[0];

  for (let i = 1; i < n; i++) {
    let tempMax = Math.max(arr[i] + k, arr[n-1] - k);
    let tempMin = Math.min(arr[0] + k, arr[i-1] - k);
    height = Math.min(height, tempMax - tempMin);
  }

  return height;
}

console.log(minimumHeights(arr, k));
