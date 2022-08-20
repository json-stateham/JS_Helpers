const powerNumber = (base, power) => {
  if (power === 0) {
    return 1;
  } else if (power & 1) { // power % 2
    return base * powerNumber(base, power - 1);
  } else {
    return powerNumber(base * base, power >> 1); // power / 2
  }
};

console.log(powerNumber(5, 5)); // 3125
console.log(5 ** 5); // 3125
