// sort dates by ascending

const dates = [
  '10.01.2017',
  '21.12.2009',
  '05.11.2016',
  '03.09.2007',
  '01.12.2013',
];

const toISO = (data, delimeter = '.') => {
  let [day, month, year] = data.split(delimeter);
  return new Date(year, --month, day);
};

// SOLUTION
const sortDates = datesArr => datesArr.sort((a, b) => toISO(a) - toISO(b));

console.log(sortDates(dates));
// ['03.09.2007', '21.12.2009', '01.12.2013', '05.11.2016', '10.01.2017'];
