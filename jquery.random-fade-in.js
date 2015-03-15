/**
 * @file jQuery Plugin: jquery.random-fade-in
 * @version 1.2.2
 * @author Yuusaku Miyazaki [toumin.m7@gmail.com]
 * @license MIT License
 */
(function($) {

/**
 * @desc プラグインをjQueryのプロトタイプに追加する
 * @global
 * @memberof jQuery
 * @param {} duration - フェードインにかかる時間 (jQuery.fadeIn()の引数と同じ形式)
 * @param {boolean} is_loop - フェードインと消去を繰り返すかどうかの真偽値
 */
$.fn.randomFadeIn = function(duration, is_loop) {
	return this.each(function() {
		new RandomFadeIn(this, duration, is_loop);
	});
};

/**
 * @global
 * @constructor
 * @classdesc 要素ごとに適用される処理を集めたクラス
 * @param {Object} elem - プラグインを適用するHTML要素
 * @param {} duration - フェードインにかかる時間 (jQuery.fadeIn()の引数と同じ形式)
 * @param {boolean} is_loop - フェードインと消去を繰り返すかどうかの真偽値
 *
 * @prop {Object} elem - プラグインを適用するHTML要素
 * @prop {} duration - フェードインにかかる時間 (jQuery.fadeIn()の引数と同じ形式)
 * @prop {boolean} is_loop - フェードインと消去を繰り返すかどうかの真偽値
 * @prop {number} len - フェードインする要素の数
 * @prop {Array} order - フェードインする順番
 */
function RandomFadeIn(elem, duration, is_loop) {
	this.elem = elem;
	this.duration  = (duration  == undefined) ? 'slow' : duration;
	this.is_loop = (is_loop == undefined) ? true   : is_loop;

	//要素の数だけ配列を作成
	this.len = $(this.elem).children().length;
	this.order = [];
	for (var i = 0; i < this.len; i++) this.order[i] = i;

	this._shuffleOrder();
	this._fadeInImages(0);
}

$.extend(RandomFadeIn.prototype, /** @lends RandomFadeIn.prototype */ {
	/**
	 * @private
	 * @desc 配列をシャッフル
	 */
	_shuffleOrder: function() {
		var last_idx = this.len;
		while (last_idx > 0) {
			var rand_idx = Math.floor(Math.random() * last_idx);
			var last_elem = this.order[--last_idx];

			// ランダムで選んだものと最後尾とを交換する
			this.order[last_idx] = this.order[rand_idx];
			this.order[rand_idx] = last_elem;
		}
	},

	/**
	 * @private
	 * @desc 順番にフェードイン表示させていく
	 * @param {number} idx - 配列の中でフェードインさせるものの添字
	 */
	_fadeInImages: function(idx) {
		var self = this;
		$(this.elem).children().eq(this.order[idx]).children().fadeIn(
			self.duration,
			function() {
				idx++;
				if (idx < self.len) {
					//すべての要素を表示させるまで、もう一度同じ関数を実行する。
					self._fadeInImages(idx);
				} else if (self.is_loop) {
					//ループの指示があれば、繰り返す。
					idx = 0;
					$(self.elem).children().children().fadeOut(self.is_loop);
					self._shuffleOrder();
					self._fadeInImages(idx);
				}
			}
		);
	}
}); // end of $.extend

})( /** namespace */ jQuery);
