/*
write an implementation of an Array.prototype.flat
*/

const nestedArray = [1, 2, [3, 4, [5]]];
// desired result: [1, 2, 3, 4, 5]

// solution 1
const flattenArray1 = (array) =>
  array.reduce(
    (acc, item) =>
      Array.isArray(item) ? acc.concat(...item) : acc.concat(item),
    []
  );

// solution 2 (mutable)
const flattenArray2 = (array) => {
  let result = [];

  while (array.length) {
    let item = array.shift();
    
    if (item.constructor.name === 'Array') {
      result = result.concat.apply(result, item);
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log(flattenArray1(nestedArray))
console.log(flattenArray2(nestedArray))