const express = require('express')
const router = express.Router()

const books = [
    {id: 1, name: 'Book 1', author: 'Author 1', published: 2022, price: 230},
    {id: 2, name: 'Book 2', author: 'Author 2', published: 2020, price: 120},
    {id: 3, name: 'Book 3', author: 'Author 3', published: 2021, price: 580},
    {id: 4, name: 'Book 4', author: 'Author 4', published: 2023, price: 150},
    {id: 5, name: 'Book 5', author: 'Author 5', published: 590, price: 369}
]

router.get('/', (request, response) => {
    response.json(books)
})

router.get('/id/:id', (request, response) => {
    const id = request.params.id - 1
    response.json(books[id])
})

module.exports = router