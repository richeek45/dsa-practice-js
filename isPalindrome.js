// Check if a number is Palindrome

// 12321  1451




function isPalidrome(num) {
  let temp = num;
  let rev = 0;

  // Reverse the numberrestar
  while(temp !== 0) {
    rev = (rev * 10) + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  console.log(rev);
  if (num === rev) {
    console.log('Palindrome')
  } else {
    console.log('Not Palindrome')
  }

}

const n = 12321;
const n1 = 1451;
isPalidrome(n1);

