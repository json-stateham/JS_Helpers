const fizzBuzz = num => {
  const check = (a, b) => a % b === 0

  for (let i = 1; i <= num; i += 1) {
    !check(i, 5) && !check(i, 3) && console.log(i)
      || check(i, 3) && check(i, 5) && console.log("fizz buzz")
      || check(i, 3) && console.log("fizz")
      || check(i, 5) && console.log("buzz")
  }
  return num
}

console.log(fizzBuzz(20))