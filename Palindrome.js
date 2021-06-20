// 1
const isPalindrome1 = str => {
  const loweredStr = str.toLowerCase().replace(/\s/g, '')
  return [...loweredStr].reverse().join('') === loweredStr
}

console.log(
  isPalindrome2('А роза упала на лапу Азора')
) // true

// 2
const isPalindrome = str => {
  let loweredStr = str.toLowerCase().replace(/\s/g, '')
  let left = 0
  let right = loweredStr.length - 1

  while (left < right) {
    if (loweredStr[left] !== loweredStr[right]) return false
    left++
    right--
  }

  return true
}

console.log(
  isPalindrome2('А роза упала на лапу Азора')
) // true