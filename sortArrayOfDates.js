//Дан массив объектов с датами, отсортируйте даты по возрастанию.

const arr = [
  { date: '10.01.2017' },
  { date: '21.12.2009' },
  { date: '05.11.2016' },
  { date: '03.09.2007' },
  { date: '01.12.2013' }
]

//SOLUTION 1:

let date = (s) => {
  let [day, month, year] = s.split('.')
  return new Date(year, --month, day)
}

let res = arr.sort((a, b) => date(a.date) - date(b.date))

//SOLUTION 2:
let res = arr.sort(
  (a, b) =>
    new Date(a.date.split('.').reverse().join('/')) -
    new Date(b.date.split('.').reverse().join('/'))
)
