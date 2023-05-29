const express = require('express')
const app = express()
const port = 3000

const logger = (request, response, next)=>{
  console.log('logged')
  next()
}

const requestTime = (request, response, next) => {
    let date = new Date()
    request.requestTime = date.toLocaleTimeString()
    next()
}
app.use(requestTime)

app.get('/', (request, response) =>{
    response.send(`<h1>Hello there!</h1><samll>Requested at:
    ${request.requestTime}</small>`)
})


app.get('*', (Request, Response) => {
  response.status(404).send(`<h1>Page not found</h1>
  <a href="/">Back to homepage</a>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})