//Custom Array.prototype.filter

Array.prototype.myFilter = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i]) === true) {
      result.push(this[i])
    }
  }
  return result
}
