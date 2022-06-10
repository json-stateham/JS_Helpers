const dateToISO = (
  date,
  { format = 'dd-mm-yyyy', formatSeparator = '-', dateSeparator = /\D+/ } = {}
) => {
  const order = new Map().set('yyyy', 0).set('mm', 1).set('dd', 2);

  const formatTokens = format.split(formatSeparator);
  const dateTokens = date.split(dateSeparator);

  let [year, month, day] = formatTokens.reduce(
    (res, token, idx) => ((res[order.get(token)] = dateTokens[idx]), res),
    []
  );

  return new Date(year, --month, day);
};

console.log(
    dateToISO('11.06.2022') < dateToISO('06.12.2022', { format: 'mm-dd-yyyy' })
);
