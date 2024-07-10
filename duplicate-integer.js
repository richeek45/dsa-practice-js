// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.





function duplicate(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return true;
    }
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    }
  }
  return false;
}

function duplicate2(arr) {
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i-1]) {
      return true;
    }
  }
  return false;
}

let nums1 = [1, 2, 3, 3];
let nums2 = [1, 2, 3, 4];
let nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(duplicate2(nums2));

