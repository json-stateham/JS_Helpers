export const filterUniqByKey = (arr, key) => {
  const keys = new Set();
  return arr.filter(el => !keys.has(el[key]) && keys.add(el[key]));
};
