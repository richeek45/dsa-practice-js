// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

function threesum(arr) {
  arr.sort();
  let i = 0;
  let res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    // Ignoring duplicates
    if (i > 0 && arr[i-1] === arr[i]) {
      continue;
    }

    let j = i+1, k = arr.length - 1;
    while(j < k) {
      const total = arr[i] + arr[j] + arr[k];

      if (total === 0) {
        res.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        while(j < k && arr[j-1] === arr[j]) {
          j++;
        }
      }
      
      if (total < 0) {
        j++;
      }
      if (total > 0) {
        k--;
      }
      
    }
    j = i+1;
    k = arr.length - 1;
  }

  return res;
}

const nums = [-1,0,1,2,-1,-4];
console.log(threesum(nums));
