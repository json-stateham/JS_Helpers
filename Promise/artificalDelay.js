const API_BASE = 'https://jsonplaceholder.typicode.com';

const delay = ms => new Promise(rs => setTimeout(() => rs(), ms));

const fetchData = id => {
  const urls = [
    `${API_BASE}/users/${id}/posts`,
    `${API_BASE}/users/${id}/albums`,
  ];

  return Promise.all([...urls.map(url => fetch(url)), delay(1500)]).then(
    results => results.slice(0, results.length - 1) // strip off the undefined result from delay()
  );
};

fetchData(1)
  .then(responses =>
    Promise.all(
      responses.map(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(
            new Error(
              `Unexpected status code: ${response.status} ${response.statusText} for ${response.url}`
            )
          );
        }
      })
    )
  )
  .then(([posts, albums]) => {
    console.log(posts);
    console.log(albums);
  })
  .catch(reason => console.error(reason.message));
