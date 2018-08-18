/**
 * @file jquery.random-fade-in
 * @version 1.3.3
 * @author Yuusaku Miyazaki <toumin.m7@gmail.com>
 * @license MIT
 */
/** @external "jQuery.fn" */
/** @external jQuery */
(function (factory) {
  if(typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function($, window, document, undefined) {

/**
 * @function external:"jQuery.fn".randomFadeIn
 * @arg {null|string|number} [duration='slow'] - Duration. Same to jQuery ".fadeIn()"
 * @arg {boolean} [isLoop=true] - Whether to repeat
 * @return {Object} jQuery object
 */
$.fn.randomFadeIn = function (duration, isLoop) {
  return this.each(function() {
    new $.randomFadeIn(this, duration, isLoop);
  });
};

/**
 * @class external:jQuery.randomFadeIn
 * @arg {Object} elem - An element to apply this plugin
 * @arg {null|string|number} duration - Duration. Same to jQuery ".fadeIn()"
 * @arg {boolean} isLoop - Whether to repeat
 * @prop {Object} elemChildren - Children of an element to apply this plugin
 * @prop {string|number} duration - Duration. Same to jQuery ".fadeIn()"
 * @prop {boolean} isLoop - Whether to repeat
 * @prop {Array} order - An array that contains indexes of elements to be shuffled
 */
$.randomFadeIn = function(elem, duration, isLoop) {
  this.elemChildren = $(elem).children();
  $(this.elemChildren).children().stop(true, false).hide();
  this.duration = duration || 'slow';
  this.isLoop = (isLoop === undefined) ? true : isLoop;

  // Create an array that contains order
  this.order = [];
  for (var i = 0, len = $(this.elemChildren).length; i < len; i++) {
    this.order[i] = i;
  }

  this.order = this._shuffleOrder(this.order);
  this._fadeInEach(0);
};

$.extend($.randomFadeIn.prototype, /** @lends external:jQuery.randomFadeIn.prototype */ {
  /**
   * Shuffle the array of elements
   * 
   * @private
   * @arg {Array}  order - An array that contains indexes of elements to be shuffled
   * @return {Array} An shuffled array
   */
  _shuffleOrder: function(order) {
    var idxLast = order.length;
    while (idxLast > 0) {
      var idxRandom = Math.floor(Math.random() * idxLast);
      idxLast--;
      var elemLast = order[idxLast];

      // Exchange each other
      order[idxLast]   = order[idxRandom];
      order[idxRandom] = elemLast;
    }
    return order;
  },

  /**
   * Run fade-in
   * 
   * @private
   * @arg {number} idx - An index of element to be fade-in
   */
  _fadeInEach: function(idx) {
    var len = $(this.elemChildren).length;
    var self = this;
    $(this.elemChildren).eq(this.order[idx]).children().fadeIn(
      this.duration,
      function() {
        idx++;
        if (idx < len) {
          // Run recursively until all elements fade in
          self._fadeInEach(idx);
        } else if (self.isLoop) {
          // Repeat fadeIn
          $(self.elemChildren).children().fadeOut(self.duration);
          self.order = self._shuffleOrder(self.order);
          self._fadeInEach(0);
        }
      }
    );
  }
}); // end of $.extend

}));
