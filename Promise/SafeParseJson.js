const objData = {
  links: {
    self: "http://example.com/articles",
    next: "http://example.com/articles?page[offset]=2",
    last: "http://example.com/articles?page[offset]=10"
  },
  data: [
    {
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!"
      }
    }
  ]
}

const jsonData = JSON.stringify(objData)

const safeParseJson = json =>
  Promise.resolve(json)
    .then(JSON.parse)
    .then(data => console.log(data))
    .catch(error => console.error(error))

safeParseJson(jsonData)