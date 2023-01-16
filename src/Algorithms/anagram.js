const anagram = (fst, snd) => {
  if (fst.length !== snd.length) return false;

  const hash = {};
  
  for (const c of fst) {
    hash[c] = hash[c] + 1 || 1;
  }

  for (const c of snd) {
    if (hash[c]) hash[c]--;
    else return false;
  }

  return true;
};

console.log(anagram('finder', 'friend')); // true
console.log(anagram('bye', 'dye')); // false
