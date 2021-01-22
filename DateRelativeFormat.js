/*
Intl.RelativeTimeFormat() to format relative time strings.
*/

const relative = new Intl.RelativeTimeFormat(
  'en',
  { style: 'long', numeric: 'auto' }
)

relative.format(3, 'day') // in 3 days
relative.format(1, 'day') // tomorrow
relative.format(-1, 'day') // yesterday
relative.format(-2, 'day') // 2 days ago
relative.format(100, 'year') // in 100 years
relative.format(-1, 'year') // last year
relative.format(0, 'year') // this year
relative.format(1, 'year') // next year
relative.format(-20, 'second') // 20 seconds ago
relative.format(10, 'second') // in 10 seconds