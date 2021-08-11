const shuffle = arr => {
  const len = arr.length
  for (let i = 0; i < len - 1; i += 1) {
    let r = Math.floor(Math.random() * (len - i))
    r && ([arr[i], arr[i + r]] = [arr[i + r], arr[i]])
  }
  return arr
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(shuffle(data))