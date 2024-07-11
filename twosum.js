// Two Sum



function twoSum(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const rem = target - arr[i];
    if (map.has(rem)) {
      return [i, map.get(rem)];
    }
    map.set(arr[i], i);
  }
}

const nums = [2, 11, 7, 15];
const target = 9;
console.log(twoSum(nums, target));

