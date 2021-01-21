const cars = ['lamborghini', 'ferrari', 'mercedes', 'bmw', 'lada']

//grab the first and last item
const { length, 0: first, [length - 1]: last } = cars
console.log(first, last) //lamborghini, lada

//using the indes as a property
const { 2: middle } = cars
console.log(middle) //mercedes

//a length property can be destructured
const { 0: first, length } = cars
console.log(first, length) //lamborghini, 5

//get a middle item
const { length, [Math.floor(length / 2 )]: middle } = cars
console.log(middle) //mercedes