// parsing the date from a string in 'dd-mm-yyyy' format

const parseDateFormat = (date, { format = 'dd-mm-yyyy' } = {}) => {
  const dateTokens = date.split(/\D/);
  const formatTokens = format.split(/\W/);

  const { yyyy, dd, mm } = Object.fromEntries(
    formatTokens.map((token, i) => [token, Number(dateTokens[i])])
  );

  return new Date(yyyy, mm - 1, dd);
};

console.log(parseDateFormat('15.01.2022', { format: 'dd-mm-yyyy' }));
console.log(parseDateFormat('01.12.2022', { format: 'mm-dd-yyyy' }));
console.log(parseDateFormat('2022.12.31', { format: 'yyyy-mm-dd' }));
