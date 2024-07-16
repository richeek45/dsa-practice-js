// Insertion sort
// arrange elements in ascending order by repeatedly placing each element in its correct position among the already sorted elements.

// comparing towards left direction with each element in the right direction



function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i-1;
    // keep shifting elements until right place while storing the value
    while(j >= 0 && arr[j] > curr) {
      arr[j+1] = arr[j]
      j--;
    }
    // place the curr value after the j index 
    arr[j + 1] = curr;

  }

  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
const arr1 = [12, 11, 13, 5, 6];
console.log(insertionSort(arr));