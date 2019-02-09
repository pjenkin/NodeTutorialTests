const express = require('express');

var app = express();

app.get('/', (request, response) =>
{
   response.send('hello mum!');
  // response.status(404).send('hello mum!');
});

app.listen(3000);

module.exports.app = app;   // export the app for use in other files (eg testing)
