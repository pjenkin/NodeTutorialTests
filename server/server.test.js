const request = require('supertest');     // NB request

var app = require('./server').app;      // NB importing both module and specific method

it ('should return hello mum! response', (done) =>
{
  request(app)
    .get('/')   // testing root url
    .expect('hello mum!')
    .end(done);     // done handled by supertest - wrapping up
});
