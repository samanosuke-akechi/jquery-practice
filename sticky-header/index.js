$(function() {
  let $header = $("header");
  let $header_coord = $header.offset();

  $(window).on("scroll", function() {
    let absolute_coord = $("html, body").scrollTop();
    
    if ($header_coord.top < absolute_coord) {  // ヘッダー座標よりウィンドウのトップ座標が大きい(ヘッダーの位置より下にスクロールしている)場合
      $header.addClass("active");
    } else {
      $header.removeClass("active");
    };
  })
})