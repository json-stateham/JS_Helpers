const { performance } = require('perf_hooks')

const output = (text, name, tStart, tEnd) =>
  console.log(`${name} - ${text} ${tEnd - tStart} ms`)

const getTime = () => performance.now()

const perfLogger =
  fn =>
  (...args) => {
    const tStart = getTime()

    try {
      const resultToReturn = fn(...args)
      output('finished in', fn.name, tStart, getTime())
      return resultToReturn
    } catch (thrownError) {
      output('exception thrown', fn.name, tStart, getTime())
      throw thrownError
    }
  }

// usage
let subtract = (a, b) => a + b
subtract = perfLogger(subtract)

const sum = subtract(2, 2)
