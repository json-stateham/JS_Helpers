const pluralRulesEng = {
  zero: 'minutes',
  one: 'minute',
  other: 'minutes',
};

const pluralTime = (plurals, lang = 'en-US') => {
  const rule = new Intl.PluralRules(lang);
  return count => `${count} ${plurals[rule.select(count)]}`;
};

export const pluralTimeEng = pluralTime(pluralRulesEng);
