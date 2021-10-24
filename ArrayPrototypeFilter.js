/*
write an implementation of an Array.prototype.filter
*/

Array.prototype.myFilter = function (callback) {
  const result = []

  for (let i = 0; i < this.length; i += 1) {
    let value = this[i]
    if (callback(value)) result.push(value)
  }

  return result
}
