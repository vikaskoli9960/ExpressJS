const express = require('express')
const router = express.Router()

router.route('/')
.get((request, response) => {
    response.send(`<h1>Get a random book</h1>`)
})
.post((request, response) => {
    response.send(`<h1>Add a book</h1>`)
})
.put((request, response) => {
    response.send(`<h1>Update the book</h1>`)
})

module.exports = router