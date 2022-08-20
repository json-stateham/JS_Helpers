const palindrome = sentence => {
  const chars = sentence.toLowerCase().replace(/\s+/g, '');
  const reversed = [...chars].reduceRight((acc, char) => acc + char, '');
  return reversed === chars;
};

console.log(palindrome('Was it a car or  a cat I  saw')); // true
