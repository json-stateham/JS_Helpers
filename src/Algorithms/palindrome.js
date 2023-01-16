const palindrome = sentence => {
  const chars = sentence.toLowerCase().replace(/\s+/g, '');

  for (let i = 0, k = chars.length - 1; k > 0; i++, k--) {
    if (chars[i] !== chars[k]) {
      return false;
    } else if (i === k) {
      return true;
    }
  }
};

console.log(palindrome('Was it a car or  a cat I  saw')); // true
