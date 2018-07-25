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
 * @arg {boolean}            [isLoop=true]     - Whether to repeat.
 * @return {Object} jQuery object
 */
$.fn.randomFadeIn = function (duration, isLoop) {
  return this.each(function() {
    new $.randomFadeIn(this, duration, isLoop);
  });
};

/**
 * @class external:jQuery.randomFadeIn
 * @classdesc 要素ごとに適用される処理を集めたクラス
 * @arg {Object} elem - プラグインを適用するHTML要素
 * @arg {null|string|number} [duration='slow'] - フェードインにかかる時間 (jQuery.fadeIn()の引数と同じ形式)
 * @arg {boolean} [isLoop=true] - フェードインと消去を繰り返すかどうかの真偽値
 * @prop {Object} elem - プラグインを適用するHTML要素
 * @prop {} duration - フェードインにかかる時間 (jQuery.fadeIn()の引数と同じ形式)
 * @prop {boolean} isLoop - フェードインと消去を繰り返すかどうかの真偽値
 * @prop {number} len - フェードインする要素の数
 * @prop {Array} order - フェードインする順番
 */
$.randomFadeIn = function(elem, duration, isLoop) {
  this.elemChildren = $(elem).children();
  $(this.elemChildren).children().stop(true, false).hide();
  this.duration = (!duration) ? 'slow' : duration;
  this.isLoop = (isLoop === undefined) ? true : isLoop;

  //要素の数だけ配列を作成
  this.len = $(this.elemChildren).length;
  this.order = [];
  for (var i = 0; i < this.len; i++) {
    this.order[i] = i;
  }

  this.order = this._shuffleOrder(this.len, this.order);
  this._fadeInEach(0);
};

$.extend($.randomFadeIn.prototype, /** @lends external:jQuery.randomFadeIn.prototype */ {

  /**
   * @private
   * @desc Shuffle the array of elements
   * @arg {number} len   - The number of elements to be shuffled
   * @arg {Array}  order - An array that contains indexes of elements to be shuffled
   * @return {Array} An shuffled array
   */
  _shuffleOrder: function(len, order) {
    var idxLast = len;
    while (idxLast > 0) {
      var idxRandom = Math.floor(Math.random() * idxLast);
      idxLast--;
      var elemLast = order[idxLast];

      // ランダムで選んだものと最後尾とを交換する
      order[idxLast] = order[idxRandom];
      order[idxRandom] = elemLast;
    }
    return order;
  },

  /**
   * @private
   * @desc Run fade-in
   * @arg {number} idx - An index of element to be fade-in
   */
  _fadeInEach: function(idx) {
    var self = this;
    $(this.elemChildren).eq(this.order[idx]).children().fadeIn(
      self.duration,
      function() {
        idx++;
        if (idx < self.len) {
          //すべての要素を表示させるまで、もう一度同じ関数を実行する。
          self._fadeInEach(idx);
        } else if (self.isLoop) {
          //ループの指示があれば、繰り返す。
          $(self.elemChildren).children().fadeOut(self.duration);
          self.order = self._shuffleOrder(self.len, self.order);
          self._fadeInEach(0);
        }
      }
    );
  }

}); // end of $.extend

}));
