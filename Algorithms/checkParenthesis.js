const checkParenthesis = text => {
  const parenthesis = {
    '(': ')',
    '<': '>',
    '[': ']',
  };

  const stack = [];

  for (const c of text) {
    if (parenthesis[c]) {
      stack.push(parenthesis[c]);
    } else if (c === stack.at(-1)) {
      stack.pop();
    } else if (c === ')' || c === ']' || c === '>') {
      return false;
    }
  }

  return true;
};

console.log(checkParenthesis('---(++++)----')); // 1
console.log(checkParenthesis('')); // 1
console.log(checkParenthesis('before ( middle []) after ')); // 1
console.log(checkParenthesis(') (')); // 0
console.log(checkParenthesis('<( >)')); // 0
console.log(checkParenthesis('( [ <> () ] <> )')); // 1
console.log(checkParenthesis(' ( [)')); // 0
