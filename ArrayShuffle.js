const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const shuffleArray = array => {
  const temp = [...array]
  const len = temp.length

  temp.forEach((_, i) => {
    let r = Math.floor(Math.random() * (len - i))
    r && ([temp[i], temp[i + r]] = [temp[i + r], temp[i]])
  })

  return temp
}

console.log(shuffleArray(sortedArray))
