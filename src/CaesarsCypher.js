/*
Caesars Cipher
https://en.wikipedia.org/wiki/ROT13

rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
*/

const encryptedSentence = 'SERR CVMMN!'

const rot13Cipher = sentence =>
  sentence.replace(/[A-Z]/g, char =>
    String.fromCharCode((char.charCodeAt(0) % 26) + 65)
  )

console.log(
  rot13Cipher(encryptedSentence) // FREE PIZZA!
)
