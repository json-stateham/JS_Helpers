// ordinal for numbers - 1st, 2nd, 3rd, 4th

const ordinals = {
  one: "st",
  two: "nd",
  few: "rd",
  many: "th",
  zero: "th",
  other: "th"
};

const ordinal = (num) => {
  const plural = new Intl.PluralRules("en-US", { type: "ordinal" });
  return `${num}${ordinals[plural.select(num)]}`;
};

console.log(ordinal(1)); //1st
console.log(ordinal(2)); //2nd
console.log(ordinal(3)); //3rd
console.log(ordinal(4)); //4th