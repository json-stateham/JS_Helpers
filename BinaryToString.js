/*
given a binary string, translate it into English sentence
*/

const binaryString =
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
// desired result: Aren't bonfires fun!?

// solution 1
const binaryAgent1 = str =>
  str
    .split(' ')
    .reduce((acc, item) => (acc += String.fromCharCode(parseInt(item, 2))), [])

// solution 2
const binaryAgent2 = str =>
  String.fromCharCode(...str.split(' ').map(char => parseInt(char, 2)))

console.log(binaryAgent1(binaryString))
console.log(binaryAgent2(binaryString))
