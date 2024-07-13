// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()",  Output: true
// Input: s = "()[]{}",  Output: true
// Input: s = "(]", Output: false 



function validParenthesis(str) {
  const stack = [];
  const map = new Map();

  map.set(')', '(');
  map.set('}', '{');
  map.set(']', '[');
  
  for (const s of str) {
    if (map.has(s)) {
      const peek = stack[stack.length-1];
      if (stack.length > 0 && map.get(s) === peek) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s);
    }
  }
  return stack.length === 0;
}

const str = "(()";
console.log(validParenthesis(str));