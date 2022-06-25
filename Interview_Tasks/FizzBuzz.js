const fizzBuzz1 = (num, i = 0) => {
  while (i < num)
    console.log(`${++i % 3 ? '' : 'Fizz'}${i % 5 ? '' : 'Buzz'}` || i);
};

fizzBuzz1(20);

const fizzBuzz2 = num => {
  for (let i = 1; i < num; i += 1) {
    if (i % 15 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
  }
};
