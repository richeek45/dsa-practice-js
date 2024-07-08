// Count number of even and odd elements in an array
// For the given array of integers, count even and odd elements.

// Input: 
// int arr[5] = {2, 3, 4, 5, 6}
// Output: 
// Number of even elements = 3    
// Number of odd elements = 2  

// Input:
// int arr[5] = {22, 32, 42, 52, 62}
// Output: 
// Number of even elements = 5  
// Number of odd elements = 0


function countOddEven(arr) {
  let odd = 0, even = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even += 1;
    }
    if (arr[i] % 2 !== 0) {
      odd += 1;
    }
  }
  console.log(`odd = ${odd}, even = ${even}`);
}

const arr = [2, 3, 4, 5, 6];
countOddEven(arr);
