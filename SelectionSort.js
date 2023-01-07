/* 
Selection sort works by selecting the minimum value in a list 
and swapping it with the first value in the list. It then starts 
at the second position, selects the smallest value in the remaining 
list, and swaps it with the second element. It continues iterating 
through the list and swapping elements until it reaches the end of the list. 
Now the list is sorted. Selection sort has quadratic time complexity in all cases.
*/

const findSmallest = (arr, startIndex) => {
  let smallest = arr[0];
  let smallestIndex = startIndex;

  for (let i = startIndex + 1; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    const smallestIndex = findSmallest(arr, i);
    swap(arr, i, smallestIndex);
  }
  return arr;
};

const array = [1, 4, -3, 2, 8, 345, 123, 43];

console.log(selectionSort(array)); // [-3, 1, 2, 4, 8, 43, 123, 345]
