// return the character that is most commonly used in the string

const charRepeat = str => {
  const charsMap = new Map();

  for (const char of str) {
    const current = charsMap.get(char);
    current ? charsMap.set(char, current + 1) : charsMap.set(char, 1);
  }

  let max = 0;
  let mostRepeated = null;

  for (const char of charsMap) {
    if (char[1] > max) {
      max = char[1];
      mostRepeated = char;
    }
  }

  return `char '${mostRepeated[0]}' is repeated ${mostRepeated[1]} times`
}

console.log(charRepeat('aaaaabccccd')) // char 'a' is repeated 5 times