/*
Intl.RelativeTimeFormat() to format relative time strings.
*/

const relativeTime = new Intl.RelativeTimeFormat(
  'ru',
  { style: 'long', numeric: 'auto' }
)

console.log(
  relativeTime.format(3, 'day'), // через 3 дня
  relativeTime.format(1, 'day'), // завтра
  relativeTime.format(-1, 'day'), // вчера
  relativeTime.format(-2, 'day'), // позавчера
  relativeTime.format(100, 'year'), // через 100 лет
  relativeTime.format(-1, 'year'), // в прошлом году
  relativeTime.format(0, 'year'), // в этом году
  relativeTime.format(1, 'year'), // в следующем году
  relativeTime.format(-20, 'second'), // 20 секунд назад
  relativeTime.format(10, 'second'), // через 10 секунд
)