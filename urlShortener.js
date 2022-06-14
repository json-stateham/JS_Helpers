const DICTIONARY = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'];
const BASE = DICTIONARY.length;

const reverseWord = word => [...word].reduceRight((res, char) => res + char, '');

const encodeId = id => {
  if (id === 0) return DICTIONARY[0];

  let encoded = '';

  while (id > 0) {
    encoded += DICTIONARY[(id % BASE)];
    id = Math.floor(id / BASE);
  }

  return reverseWord(encoded);
}

const decodeId = id =>
  [...id].reduce((decoded, _, i) =>
    (decoded = decoded * BASE + DICTIONARY.indexOf(id.charAt(i)), decoded)
    , 0);

console.log(encodeId(11231230)); // VhU2
console.log(decodeId('VhU2')); // 11231230