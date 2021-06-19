/*
Вывести простые числа.
Натуральное число, большее 1, называется простым, 
если оно ни на что не делится, кроме себя и 1. 
Другими словами, n > 1 – простое, если при его делении на любое число 
кроме 1 и n есть остаток.Например, 5 это простое число, 
оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7. 
*/

const isPrime = number => {
  let start = 2
  const limit = Math.sqrt(number)

  while (start <= limit) {
    if (number % start++ < 1) return false
  }
  return number > 1
}

const printPrimes = (num, result = '') => {
  for (let i = 0; i <= num; i += 1) {
    isPrime(i) && (result += `${i} `)
  }
  return result
}

console.log(printPrimes(1125))
