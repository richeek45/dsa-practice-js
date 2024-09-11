// https://www.geeksforgeeks.org/trapping-rain-water/


let arr = [3, 0, 1, 0, 4, 0, 2];
let arr1 = [3, 0, 2, 0, 4];
let arr2 = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];


// Using left and right array storing the max value from left side and right side
// and then finding the difference the min to calculate the water
function trappingRainwater1(arr) {
  let n = arr.length;
  let left = [];
  let right = [];
  let water = 0;

  left[0] = arr[0];
  right[n-1] = arr[n-1];

  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i-1], arr[i]);
  }

  for (let i = n-2; i >= 0; i--) {
    right[i] = Math.max(right[i+1], arr[i]);
  }


  for (let i = 0; i < n; i++) {
    water += Math.min(left[i], right[i])-arr[i];
  }
  return water;
}

// Using stack 
function trappingRainwater2(arr) {
  let stack = [];
  let n = arr.length;
  let water = 0;

  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && arr[i] > arr[stack[stack.length-1]]) {
      let midHeight = arr[stack.pop()];

      if(stack.length == 0) {
        break
      }

      let lIndex = stack[stack.length-1];
      let lHeight = arr[lIndex];
      let rHeight = arr[i];
      let minH = Math.min(lHeight, rHeight);
      water += (minH - midHeight) * (i - lIndex - 1);

    }
    stack.push(i);

  }

  return water;
}

// Using two pointer approach calculating max height from both sides 
function trappingRainwater3(arr) {
  let n = arr.length;
  let lMax = arr[0], rMax = arr[n-1];
  let left = 0, right = n - 1;
  let water = 0;

  while(left <= right) {
    if (lMax <= rMax) {
      water += Math.max(0, lMax - arr[left]);
      lMax = Math.max(lMax, arr[left]);
      left++;
    } else {
      water += Math.max(0, rMax - arr[right]);
      rMax = Math.max(rMax, arr[right]);
      right--;
    }
  }

  return water;
}

console.log(trappingRainwater3(arr));


