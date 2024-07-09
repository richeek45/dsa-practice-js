// Find a pair with the given sum in an array
// Given an unsorted integer array, find a pair with the given sum in it.

// Input: nums = [8, 7, 2, 5, 3, 1], target = 10, Output: Pair found (8, 2), Pair found (7, 3) 
// Input: nums = [5, 2, 6, 8, 1, 9], target = 12 Output: Pair not found


function findSum(arr, target) {
  // 2 pointer approach
  let k = 0, l = arr.length - 1;
  arr.sort(); // mutates the array -> O(nlogn)
  while(k < l) {
    if (arr[k] + arr[l] === target) {
      return true;
    }
    if (arr[k] + arr[l] > target) {
      l--;
    } 
    if (arr[k] + arr[l] < target) {
      k++;
    } 
  }
  return false;
}

const nums1 = [8, 7, 2, 5, 3, 1], target1 = 10;
const nums2 = [5, 2, 6, 8, 1, 9], target2 = 12;

console.log(findSum(nums2, target2));

