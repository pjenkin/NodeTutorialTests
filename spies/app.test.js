const expect = require('expect');

describe('App', () =>
{
  it('should call the spy correctly', () =>
  {
    var spy = expect.createSpy();
    // spy();  // 'inject' spy
    spy('PNJ',45);  // 'inject' spy
    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('PNJ',45);
  });
});
