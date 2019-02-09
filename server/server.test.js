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


// test to assert (1) status code is 200 (2) my own user object exists (toInclude)
it ('should contain P Jenkin name & age in a 200 response', (done) =>
{
    request(app)
    .get('/users')
    .expect(200)    // condition (1) - check for status 200
    // .expect(300)    // condition (1) - check for status 200
    .expect((response) =>
    {
      expect((response.body)).toInclude(
        {
          // name: 'P Jenkins',
          name: 'P Jenkin',
          age: '45'
        });
    })
    .end(done);   // and wrap up this chain of expects from the HTTP response
});
