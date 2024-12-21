// return the character that is most commonly used in the string

const mostRepeatedChar = str => {
  const hash = {};

  for (const char of str) {
    hash[char] = hash[char] + 1 || 1;
  }

  const { char, count } = Object.entries(hash).reduce(
    (acc, [char, count]) => {
      if (count > acc.count) {
        acc.count = count;
        acc.char = char;
      }
      return acc;
    },
    { char: "", count: 0 }
  );

  return `The char '${char}' is repeated ${count} times`;
};

console.log(mostRepeatedChar('aaaaabccccd'));
// char 'a' is repeated 5 times
