/*Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.Thus 'A' < -> 'N', 'B' < -> 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
    https://en.wikipedia.org/wiki/ROT13

rot13("SERR CVMMN!") should decode to FREE PIZZA!
*/

//SOLUTION 1:
const rot13 = (str) => {
  return str.replace(/[A-Z]/g, (L) =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  )
}

rot13('SERR CVMMN!') // -> FREE PIZZA!

//SOLUTION 2:
const rot13 = (str) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return str
    .split('')
    .map((char) => {
      const pos = alphabet.indexOf(char)
      return pos >= 0 ? alphabet[(pos + 13) % 26] : char
    })
    .join('')
}
