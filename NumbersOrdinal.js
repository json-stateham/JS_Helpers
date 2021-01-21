//Use Intl.PluralRules() to easily find the ordinal for numbers - 1st, 2nd, 3rd, 4th

const ordinalNumbers = (number) => {
  const pr = new Intl.PluralRules('en-US', { type: 'ordinal' })

  const ordinals = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    many: 'th',
    zero: 'th',
    other: 'th'
  }
  return `${number}${ordinals[pr.select(number)]}`
}

ordinalNumbers(1) //1st
ordinalNumbers(2) //2nd
ordinalNumbers(3) //3rd
ordinalNumbers(4) //4th

getOrdinalSuffix = number => {
  if (number % 10 === 1 && number !== 11) return 'st'
  if (number % 10 === 2 && number !== 12) return 'nd'
  if (number % 10 === 3 && number !== 13) return 'rd'
  return 'th'
}