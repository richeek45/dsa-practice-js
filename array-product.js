// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] 
// is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Follow up: Can you solve the problem in O(1) extra space complexity? 
// (The output array does not count as extra space for space complexity analysis.)

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productArray(arr) {
  // pre-fix calculation
  const res = [];
  let postfix = 1, prefix = 1;
  for (let i = 0; i < arr.length; i++) {
    res.push(prefix);
    prefix *= arr[i];
  }

  for (let i = arr.length-1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= arr[i];
  }


  console.log(res);
}

const nums = [1,2,3,4]
const nums1 = [-1,1,0,-3,3]
productArray(nums1);
