const debounce = (fn, ms) => {
  let isCooldown = false;

  return (...args) => {
    if (isCooldown) return;
    fn(...args);
    isCooldown = true;
    queueMicrotask(() => setTimeout(() => isCooldown = false, ms));
  }
}

const debouncedFn = debounce(console.log, 1000)

setTimeout(() => debouncedFn(1), 100) // 1
setTimeout(() => debouncedFn(2), 1100) // ...
setTimeout(() => debouncedFn(3), 100) // ...
setTimeout(() => debouncedFn(4), 1100) // ...
setTimeout(() => debouncedFn(5), 1500) // 5