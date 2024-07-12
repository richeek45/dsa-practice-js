// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Input: strs = [""], Output: [[""]]
// Input: strs = ["a"], Output: [["a"]]

function isAnagram(s1, s2) {
  const count = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }
  return true;
}


function groupAnagrams(arr) {
  let result = [];

  // Use a hashmap to 
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const count = Array(26).fill(0);
    const str = arr[i];
    // count the (characters in each strings)
    for (let j = 0; j < str.length; j++) {
      count[str.charCodeAt(j) - 'a'.charCodeAt(0)]++;
    }

    // the string version of count is the key
    const key = count.toString(); 
    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);

  }
  result = Array.from(map.values());
  console.log(result);
}

const strs = ["eat","tea","tan","ate","nat","bat"];
groupAnagrams(strs);

