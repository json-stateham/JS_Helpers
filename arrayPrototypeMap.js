//Write your own Array.prototype.myMap(),
//which should behave exactly like Array.prototype.map().

const s = [23, 65, 98, 5]

//SOLUTION 1:

Array.prototype.myMap = function (callback) {
  let newArray = []
  for (let i = 0; i < this.length; i += 1) {
    newArray.push(callback(this[i]))
  }
  return newArray
}

//SOLUTION 2:

Array.prototype.myMap = function (callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr
}

const new_s = s.myMap(function (item) {
  return item * 2
})
