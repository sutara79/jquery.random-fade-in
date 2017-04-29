/**
 * @file Unit Testing by QUnit 1.x -- $.randomFadeIn._shuffleOrder()
 */
jQuery(document).ready(function($) {

  test('(len, arr)', 1, function() {
    var arr = [0, 1, 2, 3, 4];
    var len = 5;
    var arrShuffled = $.randomFadeIn.prototype._shuffleOrder(len, arr);
    strictEqual(arrShuffled.length, arr.length);
  });

});