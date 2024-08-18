// 1306. Jump Game 3
// Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, 
// you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.

const arr = [4,2,3,0,3,1,2], start = 5;


function canReach(arr, start, vis) {
  if (start >= 0 && start < arr.length && !vis.has(start)) {
    if (arr[start] === 0) {
      return true;
    }
    vis.add(start);
    // arr[start] = -arr[start];
    return canReach(arr, start + arr[start], vis) || canReach(arr, start - arr[start], vis);
  }

  return false;  
}

console.log(canReach(arr, start, new Set()));