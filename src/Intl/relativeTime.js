// Intl.RelativeTimeFormat() returns internationalized relative time message as string

export const relativeTime = ({ unit = 'day', lang = 'en', style = 'long' }) => {
  const formatter = new Intl.RelativeTimeFormat(lang, {
    style,
    numeric: 'auto',
  });

  return num => formatter.format(num, unit);
};
