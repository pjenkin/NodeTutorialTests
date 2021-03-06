/*
module.exports.add = (a,b) =>
{
  return a + b;
};
*/

module.exports.add = (a,b) => a + b;    // ES6 - explicit

module.exports.asyncAdd = (a,b,callback) => {
  setTimeout(() =>
  {
    callback(a + b);    // inline callback for simple demo
  }
  ,1500);   // deefault mocha test timeout: 2s
};

module.exports.square = (a) => a * a;
// module.exports.square = (a) => a * a + 1;

module.exports.asyncSquare = (a, callback) =>
{
  setTimeout(() =>
  {
      callback(a * a);  // inline callback as simple practice only
  },1000);
};

module.exports.setName = (user, fullName) =>
{
  // assuming name[space]lastname
  var names = fullName.split(' ');
  console.log('names',names)
  user.firstName = names[0];
  user.lastName = names[1];
  // user.lastName = names[1] + 's';

  return user;
}
