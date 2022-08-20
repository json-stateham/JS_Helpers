/*
write an implementation of an Array.prototype.flat
*/

const flatArray = array =>
  array.reduce(
    (acc, item) =>
      Array.isArray(item) ? acc.concat(...item) : acc.concat(item),
    []
  );

console.log(flatArray([1, 2, [3, 4, [5]]])); // [1, 2, 3, 4, 5]
