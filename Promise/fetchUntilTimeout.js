// get the data faster than the timeout time expires

const rejectByTimeout = ms =>
  new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms));

const fetchUntilTimeout = (url) =>
  Promise.race([fetch(url), rejectByTimeout(10)]);

fetchUntilTimeout('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(err => console.error(err.message));
  