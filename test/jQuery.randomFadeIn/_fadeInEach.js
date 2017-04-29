/**
 * @file Unit Testing by QUnit 1.x -- $.randomFadeIn._shuffleOrder()
 */
jQuery(document).ready(function($) {

  module('$.randomFadeIn._shuffleOrder', {
    setup: function() {
      $('<div id="target">').appendTo('body');
      this.target = $('#target');
      this.obj = new $.randomFadeIn(target);
    },
    teardown: function() {
      this.target.remove();
      delete this.obj;
    }
  });

  test('(this.target) top = -1', 6, function() {
    this.target.css({
      'position': 'absolute',
      'top': -1
    });
    var returns = this.obj._shuffleOrder(this.target);
    strictEqual(returns.elem, this.target);
    strictEqual(typeof returns.width, 'number');
    strictEqual(typeof returns.offset_top, 'number');
    strictEqual(typeof returns.offset_bottom, 'number');
    strictEqual(typeof returns.offset_left, 'number');
    strictEqual(typeof returns.position_top, 'number');
  });

  test('(this.target) top = "auto"', 1, function() {
    this.target.css('top', 'auto');
    var returns = this.obj._shuffleOrder(this.target)
    strictEqual(returns.position_top, 0);
  });

});