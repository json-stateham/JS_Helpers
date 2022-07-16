// using the fastest response in a Service Worker

self.addEventListener('fetch', e => {
  // cached response
  const cachedResp = caches.match(e.request);

  // fetch new response
  const fetchedResp = fetch(e.request.url);

  // respond with the fastest option
  e.respondWith(
    Promise.any([fetchedResp.catch(() => cachedResp), cachedResp])
      .then(resp => resp ?? fetchedResp)
      .catch(() => {})
  );
});
