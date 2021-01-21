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

//SOULTION 1:
const primeNum = (num, res = []) => {
  for (let counter = 3; counter <= num; counter += 2) {
    let notPrime = false
    for (let i = 2; i <= res.length; i += 1) {
      counter % i === 0 && i !== counter ? (notPrime = true) : void 1
    }
    notPrime === false ? res.push(counter) : void 1
  }
  return res.join(' ')
}

console.log(primeNum(20))

//SOLUTION 2:
const getPrimeNums = (max) => {
  const primeNums = [2]

  for (let i = 3; i < max; i += 2) {
    let isSimple = true
    const sqrt = Math.sqrt(i) | (0 + 1)

    for (let n = 0; n < primeNums.length && n <= sqrt; n += 1) {
      if (i % primeNums[n] === 0) {
        isSimple = false
        break
      }
    }
    if (isSimple) {
      primeNums.push(i)
    }
  }
  return primeNums
}
