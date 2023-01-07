// Intl.RelativeTimeFormat() returns internationalized relative time message as string

const relativeTime = ({ unit = 'day', lang = 'en', style = 'long' }) => {
  const formatter = new Intl.RelativeTimeFormat(lang, {
    style,
    numeric: 'auto',
  });

  return num => formatter.format(num, unit);
};

const dayRelative = relativeTime({ unit: 'day' });
const yearRelative = relativeTime({ unit: 'year' });

console.log(dayRelative(100)); // in 100 days
console.log(dayRelative(-100)); // 100 days ago

console.log(yearRelative(100)); // in 100 years
console.log(yearRelative(-100)); // 100 years ago
