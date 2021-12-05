const addLogger =
  (fn, logger = console.log) =>
  (...args) => {
    logger(`Entering function: ${fn.name}, with args: ${args}`)

    try {
      const resultToReturn = fn(...args)
      logger(`Exiting function: ${fn.name}, with result: ${resultToReturn}`)
      return resultToReturn
    } catch (thrownError) {
      logger(`Exiting function: ${fn.name} threw ${thrownError}`)
      throw thrownError
    }
  }

// usage
let subtract = (a, b) => a + b
subtract = addLogger(subtract)

const sum = subtract(2, 2)
