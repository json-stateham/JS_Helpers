const getRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomChar = () => {
  const min = 'A'.charCodeAt();
  const max = 'Z'.charCodeAt();
  return String.fromCharCode(getRandomInRange(min, max));
};
