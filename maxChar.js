/* 
return the character that is most
commonly used in the string
*/

// Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// solution
const maxChar = str => {
  let max = 0;
  let resultChar = '';

  const chars = str.split('').reduce(
    (acc, val) => {
      acc[val] = acc[val] + 1 || 1;
      return acc
    }, {})

  for (let key in chars) {
    chars[key] > max ? (resultChar = key) : resultChar;
    max = chars[key];
  }
  return resultChar;
}

maxChar('abcccccccd') // c