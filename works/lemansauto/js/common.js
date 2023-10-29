$(window).on('load', function () {
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow', function () {//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function () {


        $('.slider').slick({
            autoplay: true,//自動的に動き出すか。初期値はfalse。
            infinite: true,//スライドをループさせるかどうか。初期値はtrue。
            slidesToShow: 3,//スライドを画面に3枚見せる
            slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
            prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
            nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
            dots: true,//下部ドットナビゲーションの表示
            responsive: [
                {
                    breakpoint: 769,//モニターの横幅が769px以下の見せ方
                    settings: {
                        slidesToShow: 2,//スライドを画面に2枚見せる
                        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
                    }
                },
                {
                    breakpoint: 426,//モニターの横幅が426px以下の見せ方
                    settings: {
                        slidesToShow: 1,//スライドを画面に1枚見せる
                        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
                    }
                }
            ]
        });
        $(".openbtn").click(function () {//ボタンがクリックされたら
            $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
            $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
            $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
        });
        
        $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
            $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
            $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
            $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
        });


     
        

        //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる

});