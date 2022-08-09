const curry = fn => (fn.length === 0 ? fn() : p => curry(fn.bind(null, p)));

// usage
const sum = (a, b, c) => a + b + c

const sumCurryed = curry(sum);
const resultTemp = sumCurryed(1)(10);
const resultFinal = resultTemp(100);

console.log(resultFinal) // 111