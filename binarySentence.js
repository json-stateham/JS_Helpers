/*
translate binary string values to regular sentence
*/

const SPACE_REGEX = /\s+/;

const charFromBinary = binary => String.fromCharCode(parseInt(binary, 2));

const binaryToSentence = str =>
  str
    .split(SPACE_REGEX)
    .reduce((result, char) => result + charFromBinary(char), '');

const binaryInput =
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111';

console.log(binaryToSentence(binaryInput)); // result: "Aren't bonfires fun!?"
