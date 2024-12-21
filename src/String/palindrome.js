const palindrome = sentence => {
  const chars = sentence.toLowerCase().replace(/\s+/g, '');

  for (let start = 0, end = chars.length - 1; end > 0; start++, end--) {
    if (chars[start] !== chars[end]) {
      return false;
    } else if (start === end) {
      return true;
    }
  }
};

console.log(palindrome('Was it a car or  a cat I  saw')); // true
