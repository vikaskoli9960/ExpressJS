const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
const port = 3000

app.use(cookieParser())
app.use(session({secret: 'Its secret', resave: true, saveUninitialized: true}))

app.get('/', (request, response)=>{
    if(request.session.page_views) {
        request.session.page_views++
        response.send('You visited this page: ' + request.session.page_views + ' times')
    } else {
        request.session.page_views = 1
        response.send('Welcome to this page for the first time!')
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})