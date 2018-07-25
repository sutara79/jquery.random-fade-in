/**
 * @file Unit Testing
 */
describe('$.fn.randomFadeIn', () => {
  let target;

  beforeEach(() => {
    target = $('<div id="target">').appendTo('body');
  });

  afterEach(() => {
    target.remove();
  });

  it('should return jQuery object', () => {
    assert.strictEqual(target.randomFadeIn(), target);
  });

  it('should return jQuery object', () => {
    assert.strictEqual(target.randomFadeIn({}), target);
  });

  it('should return jQuery object', () => {
    assert.strictEqual(target.randomFadeIn('reset'), target);
  });
});