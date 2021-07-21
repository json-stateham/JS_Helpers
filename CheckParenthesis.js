// 1
const checkParenthesis1 = str => {
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
  checkParenthesis1("()"), // true
  checkParenthesis1("(}"), // false
  checkParenthesis1("([])"), // true
  checkParenthesis1("(()"), // false
  checkParenthesis1("[([])]"), // true
  checkParenthesis1("([)]") // false
)


// 2
const checkParenthesis2 = str => {
  const charHash = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  return [...str].reduce((stack, char) => {
    if (charHash[char]) {
      stack.push(char)
    } else if (char !== charHash[Array.prototype.pop.call(stack)]) {
      return false
    }
    return stack
  }, []).length === 0
}

console.log(
  checkParenthesis2("()"), // true
  checkParenthesis2("(}"), // false
  checkParenthesis2("([])"), // true
  checkParenthesis2("(()"), // false
  checkParenthesis2("[([])]"), // true
  checkParenthesis2("([)]") // false
)