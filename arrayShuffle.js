const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// desired result is shuffled array: [2, 9, 3, 6, 8, 5, 1, 10, 7, 4]

const randIndex = (len, i) => Math.floor(Math.random() * (len - i));

const arrayShuffle = (array) => {
  const copy = [...array];

  copy.forEach((_, i, self) => {
    const rand = randIndex(self.length, i);
    if (rand) {
      [copy[i], copy[i + rand]] = [copy[i + rand], copy[i]];
    }
  });

  return copy;
};

console.log(arrayShuffle(sortedArray));
