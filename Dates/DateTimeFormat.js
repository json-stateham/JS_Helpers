const now = new Date()

new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now)
// Saturday, January 23, 2021

new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(now)
// January 23, 2021

new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(now)
// Jan 23, 2021

new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(now)
// 1/23/21

new Intl.DateTimeFormat('fr-CA', { dateStyle: 'long' }).format(now)
// 23 janvier 2021

const options = { weekday: 'long', hour: 'numeric'}
new Intl.DateTimeFormat('en-US', options).format(new Date())
// Saturday, 2 AM
