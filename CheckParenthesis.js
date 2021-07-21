const checkParenthesis = str => {
  const charHash = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  const stack = []
  let i = -1

  while (++i < str.length) {
    let char = str[i]
    if (charHash[char]) {
      stack.push(char)
    } else if (char !== charHash[stack.pop()]) {
      return false
    }
  }

  return stack.length === 0
}

console.log(
  checkParenthesis("()"), // true
  checkParenthesis("(}"), // false
  checkParenthesis("([])"), // true
  checkParenthesis("(()"), // false
  checkParenthesis("[([])]"), // true
  checkParenthesis("([)]") // false
)