// filter uniq items by key

const filterUniqByKey = (arr, key) => {
  const keys = new Set();
  return arr.filter(el => !keys.has(el[key]) && keys.add(el[key]));
};

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

console.log(filterUniqByKey(dataWithRepeatedItems, 'id'));

// desired result
/**
 * {id: 1, name: 'Item #1'},
 * {id: 2, name: 'Item #2'},
 * {id: 3, name: 'Item #3'},
 * {id: 4, name: 'Item #4'},
 */
