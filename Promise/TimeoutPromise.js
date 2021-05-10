const timeoutPromise = (ms, promise) => {
  const timeoutErrorPromise = new Promise((_, reject) => {
    setTimeout(() => reject(Error(`Operation timed out after ${ms} ms`)), ms)
  })
  return Promise.race([promise, timeoutErrorPromise])
}

const imagePromise = fetch('https://source.unsplash.com/user/erondu/1600x900')

timeoutPromise(100, imagePromise)
  .then(response => console.log(response))
  .catch(err => console.error(err))