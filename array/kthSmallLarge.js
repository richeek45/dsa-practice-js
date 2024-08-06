// Kth largest - kth smallest


const arr1 = [12, 3, 5, 7, 19];
const arr2 = [7, 10, 4, 3, 20, 15]; 
const k = 3; 

function kthSmallest(freq, k, max) {
  let count = 0;
  for (let i = 0; i < max; i++) {
    if (freq[i] !== 0) {
      count += freq[i];
      if (count >= k) {
        return i;
      }
    }
  }
  return -1;

}

function kthLargest(freq, k, max) {
  let count = 0;
  for(let i = max; i >=0; i--) {
    if (freq[i] !== 0) {
      count += freq[i];
      if (count >= k) {
        return i;
      }
    }
  }

  return -1;
}


function kthElement(arr, k) {
  let max = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    max = Math.max(max, arr[i]);
  }

  let freq = new Array(max+1).fill(0);
  for (let i = 0; i < n; i++) {
    freq[arr[i]]++;
  }

  // return kthSmallest(freq, k, max);
  return kthLargest(freq, k, max);

}



let val = kthElement(arr2, k);
console.log(val);
