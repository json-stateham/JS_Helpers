// ordinal for numbers - 1st, 2nd, 3rd, 4th

const ordinals = {
  one: "st",
  two: "nd",
  few: "rd",
  many: "th",
  zero: "th",
  other: "th"
};

export const ordinal = (num) => {
  const plural = new Intl.PluralRules("en-US", { type: "ordinal" });
  return `${num}${ordinals[plural.select(num)]}`;
};
