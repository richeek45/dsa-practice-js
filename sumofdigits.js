// Program for Sum of the digits of a given number

// Input: n = 687, Output: 21
// Input: n = 12, Output: 3

function sumOfDigits(num) {
  let sum = 0;

  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  console.log(sum);
}

let num1 = 687, num2 = 12;
sumOfDigits(num1);
