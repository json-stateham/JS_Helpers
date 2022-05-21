// filter uniq items by key
const dataWithRepeatedItems = [
  { id: 1, name: 'Item #1' },
  { id: 2, name: 'Item #2' },
  { id: 1, name: 'Item #1' },
  { id: 3, name: 'Item #3' },
  { id: 2, name: 'Item #2' },
  { id: 4, name: 'Item #4' },
  { id: 1, name: 'Item #1' },
  { id: 3, name: 'Item #3' },
];

// 1
const filterUniqByKey1 = (arr, key) => {
  const keys = new Set();
  return arr.filter(el => !keys.has(el[key]) && keys.add(el[key]));
};

// 2
const filterUniqByKey2 = (data, key) =>
  data.filter(
    (obj, idx) => data.map(x => x[key]).indexOf(obj[key]) === idx
  );

// 3
const filterUniqByKey3 = (data, key) => {
  const hash = new Map();

  data.forEach(item => {
    if (!hash.has(item[key])) hash.set(item[key], item);
  });

  return [...hash.values()];
}

console.log(filterUniqByKey1(dataWithRepeatedItems, 'id'));
console.log(filterUniqByKey2(dataWithRepeatedItems, 'id'));
console.log(filterUniqByKey3(dataWithRepeatedItems, 'id'));

// desired result
/**
 * {id: 1, name: 'Item #1'},
 * {id: 2, name: 'Item #2'},
 * {id: 3, name: 'Item #3'},
 * {id: 4, name: 'Item #4'},
 */
