/*
jQuery Plugin
jquery.randomFadeIn.js 1.1
Yuusaku Miyazaki (toumin.m7@gmail.com)
MIT License
*/
(function($) {
	$.fn.randomFadeIn = function(dur, loop) {
		return this.each(function() {
			//オプションを準備
			dur  = (dur  == undefined) ? 'slow' : dur;
			loop = (loop == undefined) ? true  : loop;

			//要素の数だけ配列を作成
			var len = $(this).children().length;
			var order = [];
			for (var i=0; i<len; i++) {
				order[i] = i;
			}

			//配列をシャッフル
			order = shuffleArray(order);

			//順番にフェードイン表示させていく
			fadeInImgs(this, dur, 0, len, order, loop);
		});
	};
	//*******************************************
	//シャッフル用関数
	//*******************************************
	//@params arr arr 子要素の個数分の連番を格納した配列
	//@return arr シャッフルされた番号
	function shuffleArray(arr) {
		var i = arr.length;
		while (i) {
			var j = Math.floor(Math.random() * i);
			var t = arr[--i];
			arr[i] = arr[j];
			arr[j] = t;
		}
		return arr;
	}
	//*******************************************
	//シャッフルされた配列の通りに要素を表示する。
	//*******************************************
	//@params elem obj プラグインを適用する要素
	//@params str  dur 各子要素を表示する間隔
	//@params int  i フェードインの実行回数(子要素の数だけ行う)
	//@params int  len 子要素の数
	//@params arr  order シャッフルされた順番
	//@params bool loop 繰り返すかどうか?
	function fadeInImgs(obj, dur, i, len, order, loop) {
		$(obj).children().eq(order[i]).children().fadeIn(
			dur, // 'fast' 1000(1秒) など。
			function() {
				i++;
				if (i < len) {
					//すべての要素を表示させるまで、もう一度同じ関数を実行する。
					fadeInImgs(obj, dur, i, len, order, loop);
				} else if (loop) {
					//ループの指示があれば、繰り返す。
					i=0;
					$(obj).children().children().fadeOut(loop);
					order = shuffleArray(order);
					fadeInImgs(obj, dur, i, len, order, loop);
				}
			}
		);
	}
})(jQuery);
