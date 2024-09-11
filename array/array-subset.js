// https://www.geeksforgeeks.org/find-whether-an-array-is-subset-of-another-array-set-1/


let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1];



function arraySubset(arr1, arr2) {
  arr1.sort((a, b) => (a - b));
  arr2.sort((a, b) => (a - b));

  console.log(arr1, arr2)

  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] === arr2[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }

  return j === arr2.length;

}


console.log(arraySubset(arr1, arr2));