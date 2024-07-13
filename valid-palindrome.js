// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Input: s = "A man, a plan, a canal: Panama", Output: true
// Explanation "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car", Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = " ", Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

function validPalindrome(str) {
  // remove all space and alphanumeric characters 
  str = str.toLowerCase();
  let res = '';

  // Only keeping lowercase alphabet
  for (const ch of str) {
    const chVal = ch.charCodeAt() - 'a'.charCodeAt(0);
    if (chVal >= 0 && chVal <= 26) {
      res += ch;
    }
  }

  let left = 0, right = res.length - 1;
  while(left < right) {
    if (res[left] !== res[right]) {
      return false;
    }
    left++; 
    right--;
  }

  return true;
}

const str1 = "A man, a plan, a canal: Panama";
console.log(validPalindrome(str1));