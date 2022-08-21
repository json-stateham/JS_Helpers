const checkParenthesis = text => {
  const parenthesisMap = {
    '(': ')',
    '<': '>',
    '[': ']',
  };

  const stack = [];

  for (const char of text) {
    if (parenthesisMap[char]) {
      stack.push(parenthesisMap[char]);
    } else if (char === stack[stack.length - 1]) {
      stack.pop();
    } else if (char === ')' || char === ']' || char === '>') {
      return false;
    }    
  }
  
  return true;
}

console.log(checkParenthesis('---(++++)----')); // 1
console.log(checkParenthesis('')); // 1
console.log(checkParenthesis('before ( middle []) after ')); // 1
console.log(checkParenthesis(') (')); // 0
console.log(checkParenthesis('<( >)')); // 0
console.log(checkParenthesis('( [ <> () ] <> )')); // 1
console.log(checkParenthesis(' ( [)')); // 0
