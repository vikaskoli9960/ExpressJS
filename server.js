const express = require('express')
const multer = require('multer')
const upload = multer()
const app = express()
const port = 3000
const about = require('./routes/about')
const book = require('./routes/book')
const books = require('./routes/books')
const users = require('./routes/users')
const flights = require('./routes/flights')
const bodyParser = require('body-parser')
const students = require('./routes/students')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const cookie = require('./routes/cookie')
const auth = require('./routes/authentication')

// app.use(express.static('public'))
app.use(bodyParser.json())
app.use(upload.array())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/about', about)
app.use('/book', book)
app.use('/books', books)
app.use('/users', users)
app.use('/flights', flights)
app.use('/students', students)
app.use('/cookie', cookie)
app.use('/auth', auth)

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index', {title: 'Welcome to homepage', message: 'Wecome to homepage!'})
})

app.get('/form', (request, response) => {
  response.render('form')
})

app.post('/form', (request, response) => {
  console.log(request.body)
  response.send('Recieved your request!')
})


app.get('*', (request, response) => {
  response.status(404).send(`<h1>Page not found</h1>
  <a href="/">Back to homepage</a>`)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})