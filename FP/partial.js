const partial = (fn, ...args) => {
  const partialize =
    (...args1) =>
    (...args2) => {
      for (let i = 0; i < args1.length && args2.length; i++) {
        if (args1[i] === undefined) {
          args1[i] = args2.shift()
        }
      }
      const allParams = [...args1, ...args2]
      return (
        allParams.includes(undefined) || allParams.length < fn.length
          ? partialize
          : fn
      )(...allParams)
    }

  return partialize(...args)
}

//
const make = (a, b, c) => `${100 * a + 10 * b + c}`

const f1 = partial(make, undefined, 4, undefined)
const f2 = f1(7)
const f3 = f2(9)
console.log(f3) // 749
