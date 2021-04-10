function debounce(func, ms) {
  let isCooldown = false

  return function () {
    if (isCooldown) return

    func.apply(this, arguments)

    isCooldown = true

    setTimeout(() => isCooldown = false, ms)
  }
}

let f = debounce(alert, 1000)

f(1)
f(2)

setTimeout(() => f(3), 100)
setTimeout(() => f(4), 1100)
setTimeout(() => f(5), 1500)