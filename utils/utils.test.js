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


it('should square a number', () =>
{
    var result = utils.square(4);

    expect(result).toBe(16).toBeA('number');    // NB chained assertions

    // if (result !== 16)
    // {
    //   throw new Error(`Expected 16 but got ${result}`);
    // }
});

it ('should expect some values', () =>
{
    // expect({name: 'Peter'}).toBe({name: 'Peter'});    // can't compare objects with toBe
    expect({name: 'Peter'}).toEqual({name: 'Peter'});    // toEqual instead of toBe
});
