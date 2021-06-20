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
  isPalindrome('А роза упала на лапу Азора')
) // true