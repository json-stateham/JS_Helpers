/*
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of 
the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, 
where the values of the letters are shifted by 13 places.
Thus 'A' < -> 'N', 'B' < -> 'O' and so on.

https://en.wikipedia.org/wiki/ROT13

Write a function which takes a ROT13 encoded string as input 
and returns a decoded string.

rot13("SERR CVMMN!") should decode to FREE PIZZA!
*/

const encryptedSentence = 'SERR CVMMN!'

// solution 1
const rot13Cipher = sentence =>
  sentence.replace(/[A-Z]/g, char =>
    String.fromCharCode((char.charCodeAt(0) % 26) + 65)
  )

console.log(
  rot13Cipher(encryptedSentence) // FREE PIZZA!
)
