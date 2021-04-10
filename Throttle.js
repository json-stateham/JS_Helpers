const f = (a) => {
  console.log(a)
}

function throttle(func, ms) {
  let isThrottled = false
  let savedThis, savedArgs

  return function wrapper() {
    if (isThrottled) {
      savedThis = this
      savedArgs = arguments
      return
    }

    func.apply(this, arguments)

    isThrottled = true

    setTimeout(() => {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }
}

let f1000 = throttle(f, 1000);

f1000(1)
f1000(2)
f1000(3)