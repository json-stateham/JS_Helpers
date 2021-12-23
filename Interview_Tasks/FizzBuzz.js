const fizzBuzz = (num, i = 0) => {
  while (i < num) {
    let str = `${++i % 3 ? '' : 'Fizz'}${i % 5 ? '' : 'Buzz'}`
    console.log(str || i)
  }
}

fizzBuzz(20)