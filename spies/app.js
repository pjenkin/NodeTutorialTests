var db = require('./db.js');

module.exports.handleSignup = (email, password) =>
{
  // check email d'exist
  db.saveUser({
    // email: email,
    // password: password
    // ES 6 abbreviated as below:
    email,
    password
  });  // save use rto // DEBUG:
  // send welcome email
};
