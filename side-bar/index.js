$(function() {
  let duration = 300;
  const $aside = $(".page-main > aside");
  let $button = $aside.find("button");
  $button.on("click", function() {
    $aside.toggleClass("open");
    if ($aside.hasClass("open")) {  // "open"クラスが付いていたらスライドバーが開く
      $aside.stop(true).animate({
        left: "0px"
      }, duration, "swing");  // "swing"はeasingというアニメーションの動き方を指定できる設定。swingは始めと終わりは緩やかに、途中は速めの設定。
      $button.find("span").text("CLOSE");  // .text("CLOSE")でテキストの書き換えを行う。
    } else {  // "open"クラスが付いていなかったらスライドバーが閉じる
      $aside.stop(true).animate({
        left: "-250px"
      }, duration, "swing");
      $button.find("span").text("OPEN");
    }
  });
});