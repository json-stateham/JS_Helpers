const pluralRulesEng = {
  zero: 'minutes',
  one: 'minute',
  other: 'minutes',
};

const pluralTime = (plurals, lang = 'en-US') => {
  const rule = new Intl.PluralRules(lang);
  return count => `${count} ${plurals[rule.select(count)]}`;
};

const pluralTimeEng = pluralTime(pluralRulesEng);

console.log(pluralTimeEng(0)); // 0 minutes
console.log(pluralTimeEng(1)); // 1 minute
console.log(pluralTimeEng(5)); // 5 minutes
