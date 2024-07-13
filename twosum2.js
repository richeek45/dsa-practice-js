// 167. Two Sum II - Input Array Is Sorted

// Input: numbers = [2,7,11,15], target = 9, Output: [1,2]
// Input: numbers = [2,3,4], target = 6, Output: [1,3]

function twoSum2(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let total = arr[left] + arr[right];
    if (total === target) {
      return [left+1,right+1];
    }
    if (total > target) {
      right--;
    }
    if (total < target) {
      left++;
    }
  }

  return [0];
}

const nums = [2,7,11,15], target = 9;
console.log(twoSum2(nums, target));