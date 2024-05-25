const fizzBuzz = (count) => {
  for (let i = 1; i <= count; i += 1) {
    let result = '';

    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
    
    console.log(result || i)
  }
};