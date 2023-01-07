const insertionSort = array => {
  for (let i = 1; i < array.length; i += 1) {
    const item = array[i];    
    let j;
    for (j = i - 1; j >= 0 && array[j] > item; j -= 1) {
      array[j + 1] = array[j];
    }    
    array[j + 1] = item;
  }

  return array;
};

console.log(insertionSort([4, 3, 2, 8, -345, 123]));
// [-345,2,3,4,8,123]
