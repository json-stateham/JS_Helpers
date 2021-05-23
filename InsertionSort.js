const insertionSort = (array) => {
  let temp = [...array];

  for (let i = 1; i < temp.length; i += 1) {
    let j;
    let key = temp[i];

    for (j = i - 1; j >= 0 && temp[j] > key; j -= 1) {
      temp[j + 1] = temp[j];
    }
    temp[j + 1] = key;
  }

  return temp;
}

console.log(insertionSort([4, 3, 2, 8, -345, 123]));
// [-345,2,3,4,8,123]