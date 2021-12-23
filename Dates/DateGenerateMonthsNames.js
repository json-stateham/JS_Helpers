/*
generate an array of month names using .toLocaleDateString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
*/

const generateMonthsNames = (variant = 'long') =>
  Array.from({ length: 12 }, (_, index) =>
    new Date(0, index).toLocaleDateString('en-US', { month: variant })
  )

const longMonthsNames = generateMonthsNames()
// result: ["January", "February", "March", ... "November", "December"]

const shortMonthsNames = generateMonthsNames('short')
// result: ["Jan", "Feb", "Mar", .. "Oct", "Nov", "Dec"]

const digitMonthsNames = generateMonthsNames('2-digit')
// result: ["01", "02", "03", ... "10", "11", "12"]
