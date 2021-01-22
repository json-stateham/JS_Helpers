async function doFetch(input, settings = {}) {
  const response = await fetch(input, {
    headers: {
      Accept: 'application/json, text/plain, */*', 
      'Content-Type': 'application/json',
    },
    ...settings,
  })
  return response.json()
}

async function moveData() {
  //GET
  const messages = await doFetch(endpoint)
  //POST
  const createMessage = await doFetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ title: 'new note' })
  })
}