/**
 * @file Unit Testing
 */
describe('$.randomFadeIn._shuffleOrder', () => {
  it('should return array', () => {
    let arr = [0, 1, 2, 3, 4];
    let len = 5;
    let res = $.randomFadeIn.prototype._shuffleOrder(len, arr);
    assert.equal(res.length, arr.length);
  });
});