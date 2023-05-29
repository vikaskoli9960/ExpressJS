const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(upload.array())
app.use(cookieParser())
app.use(session({secret: 'Your_secret_key', resave: true, saveUninitialized: true}))

var Users = []

app.get('/', (request, response) => {
  response.render('index', {title: 'Welcome to homepage', message: 'Wecome to homepage!'})
})

app.get('/signup', (request, response) => {
    response.render('signup')
})

app.post('/signup', (request, response) => {
    if(!request.body.id || !request.body.password) {
        response.status(400)
        response.send('Invalid credentials!')
    } else {
        Users.filter((user)=>{
            if(user.id === request.body.id) {
                response.render('signup', {
                    message: 'User already exists. Please Login'
                })
            }
        })

        let newUser = {id: request.body.id, password: request.body.password}
        Users.push(newUser)
        request.session.user = newUser
        response.redirect('/protected_page')
    }
})

function checkSignIn(request, response, next) {
    if(request.session.user) {
        next()
    } else {
        let error = new Error('Not logged in')
        next(error)
    }
    
}

app.get('/login', (request, response) => {
    response.render('login')
})

app.post('/login', (request, response) => {
    if(!request.body.id || !request.body.password) {
        response.render('login', {message: 'Please enter correct credentials!'})
    } else {
        Users.filter(function(user) {
            if(user.id === request.body.id && user.password === request.body.password) {
                request.session.user = user
                response.redirect('/protected_page')
            }
            else {
                response.render('login', {message: 'Invalid credentials!'})
            }
        })
    }
})

app.get('/protected_page', checkSignIn, function(request, response) {
    response.render('protected_page', {id: request.session.user.id})
})

app.get('/logout', (request, response) => {
    request.session.destroy(()=>{
        console.log('User logged out')
    })
    response.redirect('/login')
})

app.use('/protected_page', (error, request, response, next)=>{
    console.error(error)
    response.redirect('/login')
})

app.get('*', (request, response) => {
  response.status(404).send(`<h1>Page not found</h1>
  <a href="/">Back to homepage</a>`)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})