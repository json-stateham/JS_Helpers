//Напишите функцию, которая преобразует массив объектов в объект

//INPUT
const arr = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 }
]
// OUTPUT ---> {width: 10, height: 20}


//Solution 1
const arrayDimension = arr =>
  arr.reduce((acc, el) =>
    ({ ...acc, [el.name]: el.value }), {})


//Solution 2
const arrToObj = (arr, result = {}) => {
  arr.forEach((item) => {
    result[item.name] = item.value
  })
  return result
}
