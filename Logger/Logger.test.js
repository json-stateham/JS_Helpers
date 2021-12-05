describe('logger function', () => {
  it('should log twice with correct functions', () => {
    let somefunc = (a, b) => `result=${a} and ${b}`
    somefunc = addLogger(somefunc)

    spyOn(window.console, 'log')
    somefunc(22, 9)

    expect(window.console.log).toHaveBeenCalledTimes(2)
    expect(window.console.log).toHaveBeenCalledWith(
      'Entering function: somefunc, with args: 22,9'
    )
    expect(window.console.log).toHaveBeenCalledWith(
      'Exiting function: somefunc, with result: result=22 and 9'
    )
  })

  it('should report a thrown exception', () => {
    let thrower = (a, b, c) => {
      throw 'FIASCO, BRATAN...'
    }

    spyOn(window.console, 'log')
    expect(thrower).toThrow()

    thrower = addLogger(thrower)

    try {
      thrower(1, 2, 3)
    } catch (e) {
      expect(window.console.log).toHaveBeenCalledTimes(2)
      expect(window.console.log).toHaveBeenCalledWith(
        'Entering function: thrower, with args: 1,2,3'
      )
      expect(window.console.log).toHaveBeenCalledWith(
        `Exiting function: thrower threw 'FIASCO, BRATAN...'`
      )
    }
  })
})
