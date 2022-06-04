const throttle = (cb, ms) => {
  let prev = 0;

  return () => {
    const now = Date.now();
    if (now - prev >= ms) {
      cb();
      prev = now;
    }
  }
}
