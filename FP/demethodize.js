// use to extract a method from a prototype and use it as a normal function

const demethodize = Function.prototype.bind.bind(Function.prototype.call)

const upperCase = demethodize(String.prototype.toUpperCase)

console.log(upperCase('abc')) // 'ABC'
