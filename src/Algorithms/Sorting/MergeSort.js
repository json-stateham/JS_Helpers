const merger = (left, right) => {
  const result = [];
  
  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const mid = arr.length / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merger(mergeSort(left), mergeSort(right));
};

const unsortedArray = [3, 14, 7, 11, 6, 1, 21, 9, 14, 15, -1];

console.log(mergeSort(unsortedArray));
