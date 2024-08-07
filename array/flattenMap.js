// Flatten the given array without using in-built methods
const arr = [1,[2,3],4,[5,[6,7]],8,9,[10]]
const output = [1,2,3,4,5,6,7,8,9,10]
const input2 = [[1, [2, 2, [3, [4, [5, [6]]]]], 1]];
const input3 = [[1, [2, 2], 1]];

// Solve by using one for loop

function flatten(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}



let ans = flatten(input2);
console.log(ans);

