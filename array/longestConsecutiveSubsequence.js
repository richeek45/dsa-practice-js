// https://www.geeksforgeeks.org/longest-consecutive-subsequence/

const arr = [1, 9, 3, 10, 4, 20, 2];
const arr1 = [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42];


function longestConsecutiveSubsequence(arr) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    let count = 1;
    let temp = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i-1] + 1 === arr[i]) {
            temp++;
            count = Math.max(temp, count);
        } else {
            temp = 1;        
        }
    }
    console.log(count);
}
function longestConsecutiveSubsequence1(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let set = new Set();
  let count = 0;
  
  for (let i = 0; i < n; i++) {
      set.add(arr[i]);
  }
  
  for (let i = 0; i < n; i++) {
      if (!set.has(arr[i] - 1)) {
        let v = arr[i];
        while(set.has(v)) {
            v++;
        }
        count = Math.max(v-arr[i], count);
      }
  }
  console.log(count);
}

longestConsecutiveSubsequence(arr1);