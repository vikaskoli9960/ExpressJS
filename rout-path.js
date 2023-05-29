const express = require('express')
const app = express()
const port = 3000
const about = require('./routes/about')
const book = require('./routes/book')

app.use(express.static('public'))
app.use('/about', about)
app.use('/book', book)

app.get('/services', (request, response) => {
  response.send(`<h1>Services</h1>`)
})

app.get('/random.txt', (request, response) => {
  response.send(`<h1>random.txt</h1>`)
})

app.get('/ab?cd', (request, response) => {
  response.send(`<h1>ab?cd</h1>`)
})

app.get('/ab+cd', (request, response) => {
  response.send(`<h1>ab+cd</h1>`)
})

app.get('/ab*cd', (request, response) => {
  response.send(`<h1>ab*cd</h1>`)
})

app.get('/ab(cd)?e', (request, response) => {
  response.send(`<h1>ab(cd)?e</h1>`)
})

app.get('/.*fly$/', (request, response) => {
  response.send(`<h1>/.*fly$/</h1>`)
})

app.get('*', (request, response) => {
  response.status(404).send(`<h1>Page not found</h1>
  <a href="/">Back to homepage</a>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})