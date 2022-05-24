// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// desired result is shuffled array: [2, 9, 3, 6, 8, 5, 1, 10, 7, 4]

const randIndex = (len, i) => Math.floor(Math.random() * (len - i));

const arrayShuffle = array => {
  array.forEach((_, i, self) => {
    const rand = randIndex(self.length, i);
    if (rand) {
      [array[i], array[i + rand]] = [array[i + rand], array[i]];
    }
  });  
  return array;
}

console.log(arrayShuffle(sortedArray));
