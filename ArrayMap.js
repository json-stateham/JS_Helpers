//Write your own Array.prototype.myMap(),
//which should behave exactly like Array.prototype.map().

const arr = [23, 65, 98, 5]

Array.prototype.myMap = function (callback) {
  let temp = []
  for (let i = 0; i < this.length; i += 1) {
    temp.push(callback(this[i]))
  }
  return temp
}

const newArr = arr.myMap(item => item * 2)

console.log(newArr)