const pluralRules = new Intl.PluralRules('ru-RU')

const pluralize = (count, singular, plural, many) => {
  const gramNumber = pluralRules.select(count)
  switch (gramNumber) {
    case 'one':
      return `${count} ${singular}`
    case 'few':
      return `${count} ${plural}`
    case 'many':
      return `${count} ${many}`
    default:
      throw new Error(`Unknown ${gramNumber}`)
  }
}

const declension = (count) => `${pluralize(count, 'минута', 'минуты', 'минут')}`

console.log(declension(1)) // 1 минута
console.log(declension(2)) // 2 минуты
console.log(declension(5)) // 5 минут