// Selection Sort
// iterating through the array, finding the smallest element, and swapping it with the current element




function selectionSort(arr) {
  // swapping n-1 min elements 
  for (let i = 0; i < arr.length-1; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}


const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(arr));