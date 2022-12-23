const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = start + Math.floor((start - end) / 2);

    if (arr[middle] === target) {
      return `Found: ${target} at index ${middle}`;
    } 
    
    if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return null;
};
