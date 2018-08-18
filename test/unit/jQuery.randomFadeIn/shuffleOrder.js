/**
 * @file Unit Testing
 */
describe('$.randomFadeIn._shuffleOrder', () => {
  it('should return array', () => {
    let arr = [0, 1, 2, 3, 4];
    let res = $.randomFadeIn.prototype._shuffleOrder(arr);
    assert.equal(typeof res, 'object');
    assert.equal(res.length, arr.length);
  });
});