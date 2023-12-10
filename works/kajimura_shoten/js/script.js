'use strict';

// TOP スライドショー
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
	var responsiveImage = [//PC用の画像
		{ src: './images/top1.jpg' },
		{ src: './images/top2.jpg' },
		{ src: './images/top3.jpg' },
		{ src: './images/top4.jpg' },

	];
} else {
	var responsiveImage = [//タブレットサイズ（768px）以下用の画像
		{ src: './images/top1.jpg' },
		{ src: './images/top2.jpg' },
		{ src: './images/top3.jpg' },
		{ src: './images/top4.jpg' },
	];
}

//Vegas全体の設定

$('.slider').vegas({
	// overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
	transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。
	transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
	delay: 5000,//スライド間の遅延をミリ秒単位で。
	animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
	animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。
	slides: responsiveImage,//画像設定を読む
	timer: false,// プログレスバー
});



// ハンバーガーメニュー
$(function () {

	$('.btn-gNav').click(function () {
		$('.right_header,.btn-gNav,.circle-bg,.top_nav').toggleClass('open');
	});
	$('.nav__list li a').click(function () {
		$('.right_header,.btn-gNav,.circle-bg,.top_nav').removeClass('open');
	  });
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


