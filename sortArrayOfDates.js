//Дан массив с датами, отсортируйте даты по возрастанию.

const arr = [
  { date: '10.01.2017' },
  { date: '21.12.2009' },
  { date: '05.11.2016' },
  { date: '03.09.2007' },
  { date: '01.12.2013' }
]

// 1
const sortDates1 = dates => {
  let temp = [...dates]

  const date = x => {
    let [day, month, year] = x.split('.')
    return new Date(year, --month, day)
  }

  return temp.sort((a, b) => date(a.date) - date(b.date))
}

// 2
const sortDates2 = dates => {
  let temp = [...dates]

  const transform = x => x.date.split('.').reverse().join('/')

  return temp.sort((a, b) =>
    new Date(transform(a)) - new Date(transform(b))
  )
}
