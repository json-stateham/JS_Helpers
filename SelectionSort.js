/* 
Selection sort works by selecting the minimum value in a list 
and swapping it with the first value in the list. It then starts 
at the second position, selects the smallest value in the remaining 
list, and swaps it with the second element. It continues iterating 
through the list and swapping elements until it reaches the end of the list. 
Now the list is sorted. Selection sort has quadratic time complexity in all cases.
*/

const array = [1, 4, 2, 8, 345, 123, 43];

function selectionSort(array) {
  let temp = [...array]

  for (let i = 0; i < temp.length - 1; i += 1) {
    let min = i;
    for (let j = i + 1; j < temp.length; j += 1) {
      if (temp[min] > temp[j]) min = j;
    }
    [temp[i], temp[min]] = [temp[min], temp[i]];
  }

  return temp
}

console.log(selectionSort(array)) //[1,2,4,8,43,123,345]