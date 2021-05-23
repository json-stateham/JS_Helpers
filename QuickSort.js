const quickSort = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Must be an array')
  }

  if (array.length === 0) {
    return [];
  }

  const pivot = array[0];
  let lesser = [], equal = [], greater = [];

  array.forEach((e) => {
    if (e < pivot) {
      lesser.push(e);
    } else if (e > pivot) {
      greater.push(e);
    } else {
      equal.push(e);
    }
  });

  return [...quickSort(lesser), ...equal, ...quickSort(greater)];
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 92]));
//[1,2,4,8,92,123,345]