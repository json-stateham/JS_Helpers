// use to extract a method from a prototype and use it as a normal function

const demetheodize = Function.prototype.bind.bind(Function.prototype.call)

const upperCase = demetheodize(String.prototype.toUpperCase)

console.log(upperCase('abc')) // 'ABC'
