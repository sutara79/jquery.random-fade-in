/**
 * jQuery Plugin
 * jquery.randomFadeIn.js 1.2
 * Yuusaku Miyazaki (toumin.m7@gmail.com)
 * MIT License
 **/
(function($) {

$.fn.randomFadeIn = function(dur, loop) {
	return this.each(function() {
		(new randomFadeIn).init(this, dur, loop);
	});
};

var randomFadeIn = function() {};

$.extend(randomFadeIn.prototype, {
	init: function(elem, dur, loop) {
		this.elem = elem;
		this.dur  = (dur  == undefined) ? 'slow' : dur;
		this.loop = (loop == undefined) ? true   : loop;

		//要素の数だけ配列を作成
		this.len = $(this.elem).children().length;
		this.order = [];
		for (var i = 0; i < this.len; i++) this.order[i] = i;

		this.shuffleArray();
		this.fadeInImages(0);
	},
	//*******************************************
	// 配列をシャッフル
	//*******************************************
	shuffleArray: function() {
		var i = this.len;
		while (i) {
			var j = Math.floor(Math.random() * i);
			var t = this.order[--i];
			this.order[i] = this.order[j];
			this.order[j] = t;
		}
	},
	//*******************************************
	// 順番にフェードイン表示させていく
	//*******************************************
	//@param int  i フェードインの実行回数(子要素の数だけ行う)
	fadeInImages: function(i) {
		var self = this;
		$(this.elem).children().eq(this.order[i]).children().fadeIn(
			self.dur, // 'fast' 1000(1秒) など。
			function() {
				i++;
				if (i < self.len) {
					//すべての要素を表示させるまで、もう一度同じ関数を実行する。
					self.fadeInImages(i);
				} else if (self.loop) {
					//ループの指示があれば、繰り返す。
					i = 0;
					$(self.elem).children().children().fadeOut(self.loop);
					self.shuffleArray();
					self.fadeInImages(i);
				}
			}
		);
	}
});

})(jQuery);
