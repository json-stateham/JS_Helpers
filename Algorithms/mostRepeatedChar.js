// return the character that is most commonly used in the string

const mostRepeatedChar = str => {
  const hash = {};

  for (const c of str) {
    hash[c] = hash[c] + 1 || 1;
  }

  const res = { char: '', repeats: 0 };

  for (const c of Object.keys(hash)) {
    if (hash[c] > res.repeats) {
      res.repeats = hash[c];
      res.char = c;
    }
  }

  return `The char '${res.char}' is repeated ${res.repeats} times`;
};

console.log(mostRepeatedChar('aaaaabccccd'));
// char 'a' is repeated 5 times
