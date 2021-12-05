// sort dates by ascending

const datesObj = [
  { date: '10.01.2017' },
  { date: '21.12.2009' },
  { date: '05.11.2016' },
  { date: '03.09.2007' },
  { date: '01.12.2013' }
]

// SOLUTION
const sortDates = dates => {
  const toISO = item => {
    let [day, month, year] = item.split('.')
    return new Date(year, --month, day)
  }

  return [...dates].sort((a, b) => toISO(a.date) - toISO(b.date))
}
