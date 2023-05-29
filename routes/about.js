const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.send(`<h1>About</h1>`)
})

router.post('/', (request, response) => {
    response.send(`<h1>This is post method</h1>`)
})

router.put('/', (request, response) => {
    response.send(`<h1>This is put method</h1>`)
})

router.delete('/', (request, response) => {
    response.send(`<h1>This is delete method</h1>`)
})

module.exports = router