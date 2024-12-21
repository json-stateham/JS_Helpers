const anagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const hash = {};

  for (const char of word1) {
    hash[char] = hash[char] + 1 || 1;
  }

  for (const char of word2) {
    if (hash[char]) {
      hash[char]--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(anagram("finder", "friend")); // true
console.log(anagram("bye", "dye")); // false
