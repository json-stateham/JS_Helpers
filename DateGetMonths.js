/*
Get an array of all month/day names using .toLocaleDateString()
*/

Array.from(
  { length: 12 }, (_, index) =>
  (new Date(0, index).toLocaleDateString('en-US', { month: 'long' })))
// ["January", "February", "March", ..... "November", "December"]

Array.from(
  { length: 12 }, (_, index) =>
  (new Date(0, index).toLocaleDateString('en-US', { month: 'short' })))
// ["Jan", "Feb", "Mar", ..... "Oct", "Nov", "Dec"]

Array.from(
  { length: 12 }, (_, index) =>
  (new Date(0, index).toLocaleDateString('en-US', { month: '2-digit' })))
// ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

Array.from(
  { length: 7 }, (_, index) =>
  (new Date(0, index).toLocaleDateString('en-US', { weekday: 'long' })))
// ["Monday", "Thursday", "Thursday", "Sunday", "Tuesday", "Friday", "Sunday"]