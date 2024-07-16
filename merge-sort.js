// Merge Sort

function merge(left, right) {
  let res = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++;
    } else {
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // add the rest
  return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


function mergeSortFun(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSortFun(arr.slice(0, mid));
  let right = mergeSortFun(arr.slice(mid));

  return merge(left, right);
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSortFun(arr));