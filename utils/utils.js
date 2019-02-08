/*
module.exports.add = (a,b) =>
{
  return a + b;
};
*/

module.exports.add = (a,b) => a + b;    // ES6 - explicit

module.exports.square = (a) => a * a;
// module.exports.square = (a) => a * a + 1;

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
