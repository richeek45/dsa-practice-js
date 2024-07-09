// Program for average of an array
const arr = [1, 2, 3, 4, 5];
const arr1 = [5, 3, 6, 7, 5, 3];

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const avg = sum / arr.length;
  console.log(avg);
}


function averageRec(arr, i, n) {

  if (i === n - 1) {
    return arr[i];
  }

  if (i === 0) {
    return ((arr[i] + averageRec(arr, i+1, n)) / n)
  }

  return (arr[i] + averageRec(arr, i+1, n)); 
}

// average(arr1);
console.log(averageRec(arr1, 0, arr1.length));