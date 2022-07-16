const timeout = ms =>
  new Promise((_, reject) => setTimeout(() => reject(new Error('Timed out')), ms));

const fetchWithTimeout = (...args) =>
  Promise.race([fetch(...args), timeout(5000)]);

const API_URL = 'https://jsonplaceholder.typicode.com/users';

fetchWithTimeout(API_URL)
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(error => console.error(error.message));
