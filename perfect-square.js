// Check if given number is perfect square
// Input : n = 2500, Output : Yes
// Explanation: 2500 is a perfect square of 50
// Input : n = 2555, Output : No

// Using Perfect Square
function isPerfectSquare(num) {
  if (num <= 1) {
    return true;
  }

  let left = 1, right = num;
  while (left <= right) {

    let mid = Math.floor(left + (right - left) / 2);

    let square = mid * mid;
    console.log(square, mid);

    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  } 
  return false;
}

let num1 = 2500;
console.log(isPerfectSquare(num1));


