const getRandomFromRange = (min, max) =>
  Math.floor(Math.random() * (1 + max - min)) + min;

const randomChar = () => {
  const min = 'A'.charCodeAt();
  const max = 'Z'.charCodeAt();
  return String.fromCharCode(getRandomFromRange(min, max));
};
