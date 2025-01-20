export const validParenthesis = (text) => {
  const parenthesis = {
    "(": ")",
    "<": ">",
    "[": "]",
  };

  const stack = [];

  for (const char of text) {
    if (parenthesis[char]) {
      stack.push(parenthesis[char]);
    } else if (char === stack.at(-1)) {
      stack.pop();
    } else if (char === ")" || char === "]" || char === ">") {
      return false;
    }
  }

  return true;
};
