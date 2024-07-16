// 153. Find Minimum in Rotated Sorted Array




function minRotatedSorted(arr) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    if (arr[left] <= arr[right]) {
      return arr[left];
  }

    let mid = left + (right - left) / 2;

    // currently in left sorted portion -> need to search right
    if (arr[mid] >= arr[left]) {
      left = mid + 1;
    } else {
      // currently in right sorted portion -> minimum is on left side
      right = mid;
    }
  }
}


const nums = [3, 4, 5, 1, 2];
const nums1 = [4,5,6,7,0,1,2];
const nums2 = [11,13,15,17];
console.log(minRotatedSorted(nums2));