'use strict';

//#全てのページ ハンバーガーメニュー 

// SP-menu
 const gNavBtn = document.querySelector('.btn-gNav');
 const gNav= document.querySelector('.gnav');

 gNavBtn.addEventListener('click',()=>{
    gNav.classList.toggle('open');

 });