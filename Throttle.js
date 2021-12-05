const throttle = (fn, ms) => {
  let prev = 0

  return () => {
    const now = new Date().valueOf()
    if (now - prev >= ms) {
      fn()
      prev = now
    }
  }
}
