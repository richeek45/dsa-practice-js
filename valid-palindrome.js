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

function isAlphanumeric(i, str) {
  const chVal = str[i].charCodeAt() - 'a'.charCodeAt(0);

  if (chVal >= 0 && chVal <= 26) {
      return false;
  }
  return true;
}

function validPalindrome(str) {
  // remove all space and alphanumeric characters 
  str = str.toLowerCase();
  
  let left = 0, right = str.length - 1;
  while(left < right) {

    while(left < right && isAlphanumeric(left, str)) {
      left++;
    }
    while(left < right && isAlphanumeric(right, str)) {
      right--;
    }

    
    if (str[left] !== str[right]) {
      return false;
    }
    left++; 
    right--;
  }

  return true;
}

const str1 = "A man, a plan, a canal: Panama";
console.log(validPalindrome(str1));