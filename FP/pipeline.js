const pipeline = (...fns) =>
  fns.reduce(
    (result, f) =>
      (...args) =>
        f(result(...args))
  )

// usage
const splitBy = delimiter => input => input.split(delimiter)
const capitalize = str => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
const onMap = cb => arr => arr.map(cb)
const joinBy = delimeter => arr => arr.join(delimeter)

const headline = sentense =>
  pipeline(splitBy(/\s+/gi), onMap(capitalize), joinBy(' '))(sentense)

console.log(headline("Alice's ADVENTURES in WoNdErLaNd"))
// Alice's Adventures In Wonderland
