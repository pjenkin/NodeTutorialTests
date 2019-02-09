const request = require('supertest');     // NB request
const expect = require('expect');

var app = require('./server').app;      // NB importing both module and specific method

it ('should return hello mum! response', (done) =>
{
  request(app)
    .get('/')   // testing root url
    // .expect(200)      // status code 200 'OK' expected
    .expect(404)      // status code 200 'OK' expected
    // .expect('hello mum!')
    // .expect('helloooooo mum!')
    // .expect(
    //   {
    //     errorMessage: 'Page ain\'t found.'
    //   }
    .expect( (response) =>
      {
        // custom assertion using expect
        expect((response.body)).toInclude(    // NB careful with brackets
          {
            // custom assertion wrt HTTP response body
            // name: 'PNJ tutorial app 1.0',    // NB leave out checking for name for the mo
            errorMessage: 'Page ain\'t found.'
          });
      })
    // )
    .end(done);     // done handled by supertest - wrapping up
});
