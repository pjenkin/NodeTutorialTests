const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () =>
{
    var result = utils.add(44 , 12);
    // throw new Error('Value not correct');

    expect(result).toBe(56);    // using expect assertion library
    expect(result).toBeA('number');

    // if (result !== 56)
    // {
    //   throw new Error(`Expected 56 but got ${result}`);
    // }
});


it ('should async\'ly\ add two numbers', (done) =>    // NB wait for done callback for mocha asynchronous
{
    utils.asyncAdd(4, 4, (sum) =>
  {
    expect(sum).toBe(8).toBeA('number');
    done();   // call done after assertion (for asynchronous) - mocha can now go ahead
  });
}
);

it('should square a number', () =>
{
    var result = utils.square(4);

    expect(result).toBe(16).toBeA('number');    // NB chained assertions

    // if (result !== 16)
    // {
    //   throw new Error(`Expected 16 but got ${result}`);
    // }
});


it ('should async\'ly square a number', (done) =>
{
  // NB no simple assignation to result variable in async with callback
  utils.asyncSquare(4, (square) =>
  {
    // expect(square).toBe(17).toBeA('number');
    expect(square).toBe(16).toBeA('number');
    done();   // done to allow mocha to proceed - what's going on here??
  });
});

it ('should expect some values', () =>
{
    // expect({name: 'Peter'}).toBe({name: 'Peter'});    // can't compare objects with toBe
     expect({name: 'Peter'}).toEqual({name: 'Peter'});    // toEqual instead of toBe
});

it ('should expect some more values (array)', () =>
{
    // expect([1,2,3,4,5]).toInclude(7);
    expect([1,2,3,4,5]).toInclude(4);
});

it ('should expect not some more values (array)', () =>
{
    expect([1,2,3,4,5]).toExclude(7);
});

it ('should expect some object values', () =>
{
    // expect({name: 'Peter'}).toBe({name: 'Peter'});    // can't compare objects with toBe
     expect({
       name: 'Peter',
       age: 45,
       location: 'Redruth'
   }).toInclude({
     age: 45
      // age: 22
   })
     ;    // toEqual instead of toBe
});

// should verify that first and last names are setName
// should include first name and last name with proper values, given object data
// should also verify that type is an object

it ('should have the correct first and last names', () =>
{
  // Arrange
  var person = ({
    fullName: 'Peter Jenkin',
    age: 45,
    location: 'Redruth'
  });

  var user = {firstName: '', lastName: ''};

  // Act
  user = utils.setName(user, person.fullName);

  // Assert
  // expect(user.firstName).toBe(person.fullName.split(' ')[0]);
  // expect(user.lastName).toBe(person.fullName.split(' ')[1]);

  // expect(user.firstName).toBe('Peter');
  // expect(user.lastName).toBe('Jenkin');

  expect(user).toInclude(
    {
      firstName: 'Peter',
      lastName: 'Jenkin'
    }
  ).toBeA('object');

});
