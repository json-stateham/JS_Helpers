// generate an array of months names

const getMonths = (variant = 'long') =>
  Array.from({ length: 12 }, (_, index) =>
    new Date(0, index).toLocaleDateString('en-US', { month: variant })
  );

console.log(getMonths())
// result: ["January", "February", "March", ... "November", "December"]

console.log(getMonths('short'));
// result: ["Jan", "Feb", "Mar", .. "Oct", "Nov", "Dec"]

console.log(getMonths('2-digit'));
// result: ["01", "02", "03", ... "10", "11", "12"]