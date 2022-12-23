// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const randomIndex = (len, i) => Math.floor(Math.random() * (len - i));

const swap = (array, i, random) =>
  ([array[i], array[i + random]] = [array[i + random], array[i]]);

const shuffleArray = array => {
  array.forEach((_, i) => swap(array, i, randomIndex(array.length, i)));
  return array;
};

console.log(shuffleArray(sortedArray));
