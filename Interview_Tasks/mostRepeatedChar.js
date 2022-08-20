// return the character that is most commonly used in the string

const mostRepeatedChar = str => {
  const hash = {};

  for (const char of str) {
    hash[char] = hash[char] + 1 || 1;
  }

  const result = Object.keys(hash).reduce((acc, char) => {
    if (hash[char] > acc.maxRepeat) {
      acc.maxRepeat = hash[char];
      acc.repeatChar = char;
    }
    return acc;
  }, { maxRepeat: 0, repeatChar: ''});

  return `char '${result.repeatChar}' is repeated ${result.maxRepeat} times`
}

console.log(mostRepeatedChar('aaaaabccccd')) 
// char 'a' is repeated 5 times