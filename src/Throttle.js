const throttle = (fn, delay) => {
  let prev = 0;

  return (...args) => {
    const now = Date.now();
    if (now - prev >= delay) {
      fn(...args);
      prev = now;
    }
  };
};
