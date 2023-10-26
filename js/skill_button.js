'use strict';

//#aboutme スキルスタンド buttonを押すと文字が切り替わる




// const skill_List = document.querySelector('#skill_ul');
// const contents = [
//     `<li>こんにちわ</li>`,
//     `<li>こんばんわ</li>`,
// ];
// skill_List.insertAdjacentHTML('beforeend',contents[0]);


$('.tab-link').on('click', (e) => {
    $('.tab-link,.tab-sec').removeClass('open');
    const tabTarget = $(e.target);
    tabTarget.addClass('open');
    $(`#${tabTarget.data('tab')}`).addClass('open');
})
