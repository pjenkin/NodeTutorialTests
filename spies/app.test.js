const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');    // app.__set__  app.__get__

describe('App', () =>
{
  var db =
  {
      saveUser: expect.createSpy()
  };
  app.__set__('db',db);


  it('should call the spy correctly', () =>
  {
    var spy = expect.createSpy();
    // spy();  // 'inject' spy
    spy('PNJ',45);  // 'inject' spy
    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('PNJ',45);
  });


  it('should call saveUser with specific user object', () =>
  {
    var email = 'pj@example.com';
    var password = '123abc';

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
    // in ES6, same as expect(db.saveUser).toHaveBeenCalledWith({email: email, password: password});
    // expect(db.saveUser).toHaveBeenCalledWith({email, password, something:'bogus'});
  });
});
