//Напишите функцию, которая преобразует массив объектов в объект

//INPUT
let arr = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 }
]
// OUTPUT ---> {width: 10, height: 20}

const arrToObj = (arr, result = {}) => {
  arr.forEach((item) => {
    result[item.name] = item.value
  })
  return result
}
