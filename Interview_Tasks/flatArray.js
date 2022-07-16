/*
write an implementation of an Array.prototype.flat
*/

const nestedArray = [1, 2, [3, 4, [5]]];
// desired result: 

const flatArray = array =>
  array.reduce(
    (acc, item) =>
      Array.isArray(item) ? acc.concat(...item) : acc.concat(item),
    []
  );

console.log(flatArray(nestedArray)); // [1, 2, 3, 4, 5]
