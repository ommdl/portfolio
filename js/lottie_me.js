'use strict';

//aboutme プロフィール lottie挿入

var params = {
    // アニメーションを表示したい要素(今回はlottieというidを付けて取得しています。)
    container: document.getElementById('me_visual'),
    // アニメーションをsvg形式で出力
    renderer: 'svg',
    // アニメーションをループする
    loop: true,
    // アニメーションを読み込んだら自動で再生する
    autoplay: true,
    // アニメーションファイル(.json)のパス
    path: "../json/json_profile/data.json"
};
 
// アニメーションをロード
var anim = lottie.loadAnimation(params);