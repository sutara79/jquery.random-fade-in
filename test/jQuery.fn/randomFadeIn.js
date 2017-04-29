/**
 * @file Unit Testing by QUnit 1.x -- $.fn.randomFadeIn()
 */
jQuery(document).ready(function($) {

  module('$.fn.randomFadeIn', {
    setup: function() {
      $('<div id="target">').appendTo('body');
      this.target = $('#target');
    },
    teardown: function() {
      this.target.remove();
    }
  });

  test('()', 1, function() {
    var returns = this.target.randomFadeIn();
    strictEqual(this.target, returns);
  });

  test('({})', 1, function() {
    var returns = this.target.randomFadeIn({});
    strictEqual(this.target, returns);
  });

  test('("reset")', 1, function() {
    var returns = this.target.randomFadeIn("reset");
    strictEqual(this.target, returns);
  });

});