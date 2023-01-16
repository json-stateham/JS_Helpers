// extract the method from the prototype and use it as a regular function

const demethodize = Function.prototype.bind.bind(Function.prototype.call);

const upperCase = demethodize(String.prototype.toUpperCase);

console.log(upperCase('abc')) // 'ABC'
