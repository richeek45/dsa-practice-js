// 242. Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false


function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  return count.every(i => i === 0);
}

let s1 = "anagram", t1 = "nagaram";

console.log(isAnagram(s1, t1));
