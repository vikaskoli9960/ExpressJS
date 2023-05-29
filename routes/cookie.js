const { Router } = require('express')
const router = Router()

router.get('/', (request, response) => {
    response.cookie('name', 'express', {maxAge: 360000 + Date.now()})
    response.send('cookie set')
})

router.get('/getcookie', (request, response) => {
    const getcookie = request.cookies
    response.send(getcookie)
})

router.get('/clearcookie', (request, response) => {
    response.clearCookie('name')
    response.send('Cleared name cookie')
})

module.exports = router