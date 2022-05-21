/*
Intl.RelativeTimeFormat() to format relative time strings.
*/

const relativeTime = ({ formatUnit, lang, style = 'long' }) => count =>
  new Intl.RelativeTimeFormat(lang, { style, numeric: 'auto' }).format(
    count,
    formatUnit
  );

const relativeDayRu = relativeTime({ formatUnit: 'day', lang: 'ru' });
const relativeYearRu = relativeTime({ formatUnit: 'year', lang: 'ru' });
const relativeDayEn = relativeTime({ formatUnit: 'day', lang: 'en' });
const relativeYearEn = relativeTime({ formatUnit: 'year', lang: 'en' });

console.log(relativeDayRu(100)); // через 100 дней
console.log(relativeDayEn(100)); // in 100 days
console.log(relativeDayRu(-100)); // 100 дней назад
console.log(relativeDayEn(-100)); // 100 days ago

console.log(relativeYearRu(100)); // через 100 лет
console.log(relativeYearEn(100)); // in 100 years
console.log(relativeYearRu(-100)); // 100 лет назад
console.log(relativeYearEn(-100)); // 100 years ago
