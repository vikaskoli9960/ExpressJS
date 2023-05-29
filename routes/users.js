var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
  response.send('Welcome to users');
});

router.get('/:userId/books/:bookId', (request, response) => {
  response.send(request.params);
});

module.exports = router;