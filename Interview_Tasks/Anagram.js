const isAnagram = (fst, snd) => {
  if (fst.length !== snd.length) return false;

  const hash = {};

  for (const char of fst) {
    hash[char] = hash[char] + 1 || 1;
  }

  for (const char of snd) {
    if (hash[char]) hash[char] = hash[char] - 1;
    else return false;
  }

  return true;
};

console.log(isAnagram('finder', 'friend')); // true
console.log(isAnagram('bye', 'dye')); // false
