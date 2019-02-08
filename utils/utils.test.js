const utils = require('./utils');

it('should add two numbers', () =>
  {
      var result = utils.add(44 , 12);
      // throw new Error('Value not correct');

      if (result !== 56)
      {
        throw new Error(`Expected 56 but got ${result}`);
      }
  });


  it('should square a number', () =>
  {
      var result = utils.square(4);

      if (result !== 16)
      {
        throw new Error(`Expected 16 but got ${result}`);
      }
  });
