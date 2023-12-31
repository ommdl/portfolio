'use strict';

// GSAPで強制横スクロール
const container = document.querySelector('.scroll_container');
//全体の長さ
const list_wrap = document.querySelector('.scroll_wrap');
// 全てのscroll_boxの幅

gsap.to(list_wrap, {
  x: () => -(list_wrap.clientWidth - container.clientWidth),
  // 横スクロール（左方向へ移動すること）なので、xプロパティにはマイナスを指定
  //scroll_wrapの横幅 – 親要素のscroll_containerの横幅
  //最後のscroll_boxがすべて見えるまでスクロールさせる
    ease: 'none',
    scrollTrigger: {
    trigger: '.bg_yellow',
    start: 'top top',
  end: () => (list_wrap.clientWidth - container.clientWidth),
    // レスポンシブ　幅サイズが変わっても対応してくれる
    scrub: true,
    //スクロールとアニメーションを同期する。
    pin: true,
    anticipatePin: 1,
    //高速スクロール時にpinによる画面固定のずれを防止する
    invalidateOnRefresh: true,
    //サイズが変わっても再計算
  }
});

const car = document.querySelector('.car_img');

gsap.to('.car_img', {
  xPercent: 100,
  duration: 3,
  delay:0.5,
  scrollTrigger: {
    trigger: '.bg_yellow',
    start: 'bottom bottom',
    // markers:true,
    toggleActions: 'play none none reverse',
  }
});


