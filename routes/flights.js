var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
  response.send('Welcome to Flights');
});

router.get('/:from-:to', (request, response) => {
  response.send(request.params);
});

module.exports = router;
