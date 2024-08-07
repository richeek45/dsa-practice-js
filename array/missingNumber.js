// Missing Number

const arr = [1, 2, 4, 6, 3, 7, 8];
const N = 8;

function missing1(arr, k) {
    let x1 = 0, x2 = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        x1 = x1 ^ arr[i];
    }
    
    for (let i = 1; i <= k; i++) {
        x2 = x2 ^ i;
    }
    
    return x1 ^ x2;
}

function missing2(arr, k) {
  let n = arr.length;
  const map = new Array(n+1).fill(0);

  for (let i = 0; i < n; i++) {
    map[arr[i]]++;
  }

  for (let i = 1; i <= n; i++) {
    if (map[i] === 0) {
      return i;
    }
  }

}

const val = missing2(arr, N);
console.log(val);
