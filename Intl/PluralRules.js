const TIME_PLURALS_RU = {
  zero: "минут",
  one: "минута",
  few: "минуты",
  many: "минут",
};

const TIME_PLURALS_EN = {
  zero: "minutes",
  one: "minute",
  other: "minutes",
};

const pluralTime =
  (plurals, lang) =>
  (count) => {
    const pluralKind = new Intl.PluralRules(lang).select(count);
    return `${count} ${plurals[pluralKind]}`;
  };

const pluralTimeRu = pluralTime(TIME_PLURALS_RU, "ru-RU");
const pluralTimeEn = pluralTime(TIME_PLURALS_EN, "en-US");

console.log(pluralTimeEn(1)); // 1 minute
console.log(pluralTimeEn(2)); // 2 minutes
console.log(pluralTimeRu(3)); // 3 минуты
console.log(pluralTimeRu(5)); // 5 минут
