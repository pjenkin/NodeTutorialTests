const express = require('express');

var app = express();

app.get('/', (request, response) =>
{
   // response.send('hello mum!');
  // response.status(404).send('hello mum!');
  response.status(404).send(
  {
    errorMessage: 'Page ain\'t found.',
    name: 'PNJ tutorial app 1.0'
  });
});


app.get('/users', (request, response) =>
{
    response.send(
      [
        {
          name: 'P Jenkin',
          age: '45'
        },
        {
          name: 'Z Beetlebrox',
          age: '500'
        },
        {
          name: 'T Stinkball',
          age: '30'
        }
        ]
    );
});

// give users name and age properties (me + x2-3)


app.listen(3000);

module.exports.app = app;   // export the app for use in other files (eg testing)
