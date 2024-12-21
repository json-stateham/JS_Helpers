export const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const pivot = start + Math.floor((end - start) / 2);

    if (arr[pivot] === target) return pivot;

    if (arr[pivot] < target) {
      start = pivot + 1;
    } else {
      end = pivot - 1;
    }
  }

  return null;
};
