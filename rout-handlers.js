const express = require('express')
const app = express()
const port = 3000
const about = require('./routes/about')
const book = require('./routes/book')
const users = require('./routes/users')
const flights = require('./routes/flights')

app.use(express.static('public'))
app.use('/about', about)
app.use('/book', book)
app.use('/users', users)
app.use('/flights', flights)

app.get('/a', (request, response)=> {
  response.send(`<h1>Hello from A</h1>`)
})

app.get('/b', (request, response, next)=> {
  console.log('the response will be sent by the next function..')
  next()
},(request, response)=>{
  response.send(`<h1>Hello from B</h1>`)
})

const callBack1 = (request, response, next)=>{
  console.log('callBack1')
  next()
}

const callBack2 = (request, response, next)=>{
  console.log('callBack2')
  next()
}

const callBack3 = (request, response)=>{
  console.log('callBack3')
  response.send(`<h1>Hello from Callback function 3</h1>`)
}

app.get('/callback', [callBack1, callBack2, callBack3])


app.get('*', (request, response) => {
  response.status(404).send(`<h1>Page not found</h1>
  <a href="/">Back to homepage</a>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})