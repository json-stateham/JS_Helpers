//Use Intl.PluralRules() to easily find the ordinal for numbers - 1st, 2nd, 3rd, 4th

const ordinal = num => {
  const pr = new Intl.PluralRules('en-US', { type: 'ordinal' })

  const ordinals = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    many: 'th',
    zero: 'th',
    other: 'th'
  }
  return `${num}${ordinals[pr.select(num)]}`
}

console.log(ordinal(1)) //1st
console.log(ordinal(2)) //2nd
console.log(ordinal(3)) //3rd
console.log(ordinal(4)) //4th
