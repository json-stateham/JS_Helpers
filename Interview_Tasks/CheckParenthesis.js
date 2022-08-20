const checkParenthesis = parenthesis => {
  const parenthesisMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (const char of parenthesis) {
    if (parenthesisMap[char]) {
      stack.push(char);
    } else if (char !== parenthesisMap[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(checkParenthesis('(}')); // false
console.log(checkParenthesis('([])')); // true
console.log(checkParenthesis('[{]}')); // false
console.log(checkParenthesis('(()')); // false
console.log(checkParenthesis('[([])]')); // true
