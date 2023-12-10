gsap.registerPlugin(ScrollTrigger);

// トップページスライドショー
/* 透明な状態から大きさを変えながら出現*/
gsap.fromTo('.images__grid img', {
    autoAlpha: 0,
    scale: .7
}, {
    autoAlpha: 1,
    scale: 1,
    duration: 2,
    scrollTrigger: {
        trigger: '.images__flex',
        start: 'top bottom 20%',
        toggleActions: 'play none none reverse'
    }
});
/* トリガー位置に到達したら画像を囲む要素が元の位置に戻る */
// gsap.fromTo('.images__flex', {
//     x: 100,
//     // xPercent: ,
// }, {
//     x: 0,
//     scrollTrigger: {
//         trigger: '.images__flex',
//         start: 'top center 10%',
//         toggleActions: 'play none none reverse'
//     }
// });
/* スクロールに応じて画像を囲む要素が左に移動 */
// gsap.to('.images__inner', {
//     xPercent: -70,
//         scrollTrigger: {
//         trigger: '.images__flex',
//         start: 'top center',
//         scrub: true,
//     }
// });



// トップページ　上部ナビ
/* 透明な状態から大きさを変えながら出現*/
gsap.fromTo('.top_nav.top ', {
    autoAlpha: 0,
}, {
    autoAlpha: 1,
    duration: 0.7,
    scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        toggleActions: 'play none none reverse',
    }
});


gsap.fromTo('#page-top', {
    autoAlpha: 0,
}, {
    autoAlpha: 1,
    duration: 0.7,
    scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        toggleActions: 'play none none reverse',
    }
});


// おすすめ商品ページ
gsap.utils.toArray(".left_in").forEach((target) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: " bottom top",
            end: "bottom center",
            toggleActions: 'play none none none',
            scrub: 1 // smoothing
        }
    })
        .from(target, {
            autoAlpha: 0,
            x: -100,
            scale: 0.9,
        })
        .to(target, {
            autoAlpha: 1,
            x: 0,
            scale: 1,
        })
});

gsap.utils.toArray(".right_in").forEach((target) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: " bottom  center",
            end: "bottom center",
            toggleActions: 'play none none none',
            scrub: 1 // smoothing
        }
    })
        .from(target, {
            autoAlpha: 0,
            x: 100,
            scale: 0.9,
        })
        .to(target, {
            autoAlpha: 1,
            x: 0,
            scale: 1,
        })
});

gsap.utils.toArray(".fadein").forEach((target) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: " bottom  center",
            end: "bottom center",
            toggleActions: 'play none none none',
            scrub: 1 // smoothing
        }
    })
        .from(target, {
            autoAlpha: 0,
            y: -200,
            scale: 0.7,
        })
        .to(target, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
        })
});


  
  gsap.utils.toArray(".shop_fade-in").forEach((target) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: " bottom  bottom",
            end: "bottom center",
            toggleActions: 'play none none none',
            scrub: 1 // smoothing
        }
    })
        .from(target, {
            autoAlpha: 0,
            y: 200,
        })
        .to(target, {
            autoAlpha: 1,
            y: 0,
        })
  });


  gsap.fromTo('.illust_kamome', {
    autoAlpha: 0,
    x: -100,
    y:100
}, {
    autoAlpha: 1,
    x: 0,
    y:0,

    duration: 3,
    scrollTrigger: {
        trigger: '#shop',
        start: 'top top',
        toggleActions: 'play none none reverse',
    }
});




// goods.html アコーディオンをクリックした時の動作
$('.sub_item').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".sub_box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

$(function(){
	$('.sub_name').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});



