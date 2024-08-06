// Rotate an array around index 
// https://medium.com/@stheodorejohn/rotating-arrays-with-javascript-two-smart-solutions-problem-explained-8545d436d5e0


// 1 2 3 4 5 6 7
// 7 6 5 4 3 2 1
// 5 6 7 1 2 3 4

const index = 3;
const input1 = [1,2,3,4,5,6,7,8,9,10];
const input2 =[10,9,8,7,-1,-5,11,5,7,6,5,3]
const input3 = [-1,-2,-3,-4,-5,-5,-4,-3,-2,-1]

// with space
function rotateRight1(arr, k) {
  let n = arr.length;

  const rotateArr = [];
  for (let i = 0; i < n; i++) {
    rotateArr[(i + k) % n] = arr[i];
  }
  console.log(rotateArr);
}

function rotateLeft1(arr, k) {
  let n = arr.length;
  k = n - k;

  const rotateArr = [];
  for (let i = 0; i < n; i++) {
    rotateArr[(i + k) % n] = arr[i];
  }
  console.log(rotateArr);
}


function reverse(arr, start, end) {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateRight(arr, k) {
  let n = arr.length;
  k = k % n;
  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  console.log(arr);
}

function rotateLeft(arr, k) {
  let n = arr.length;
  k = n - k;

  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  console.log(arr);
}

// rotateRight1(input1, index);
// rotateLeft1(input1, index);
// rotateRight(input1, index);
rotateLeft(input1, index);