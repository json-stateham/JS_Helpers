const base10ToBinary = n => {
  let binaryStr = '';

  const helper = n => {
    if (n < 2) {
      binaryStr += n;
    } else {
      helper(Math.floor(n / 2));
      helper(n % 2);
    }
  };
  helper(n);

  return binaryStr;
};

console.log(base10ToBinary(232)); // 11101000
