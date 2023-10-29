//logoの表示
$(window).on('load',function(){
    $("#splash").delay(2000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });



  // const sessionKey = "accesed";
  // const sessionValue = true;
  
  // //sessionStorageにsessionKeyというデータの有無を判別
  // if (!sessionStorage.getItem(sessionKey)) {
  //   //初回アクセス時の処理
  //   document.getElementById("modal").style.display = "block";
  //   document.querySelector(".c-btn").addEventListener("click", () => {
  //     document.getElementById("modal").style.display = "none";
  //     //sessionStorageにデータを追加
  //     sessionStorage.setItem(sessionKey, sessionValue);
  //   });
  // } else {
  //   //ここに通常アクセス時の処理
  //   console.log("アクセス済み");
  // }