'use strict';

//#aboutme スキルスタンド buttonを押すと文字が切り替わる


$(function() {
    $('.button_link').on('click', function() {
      $('.button_link,.skill-sec').removeClass('open');
    
      $(this).addClass('open');
       
     var index = $('.button_link').index(this);
       $('.skill-sec').eq(index).addClass('open');
    });
  });
  