const fizzBuzz = (num, i = 0) => {
  while (i++ < num) {
    const fizz = i % 3 ? '' : 'Fizz';
    const buzz = i % 5 ? '' : 'Buzz';
    console.log(`${fizz}${buzz}` || i);
  }
};
