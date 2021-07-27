$(function() {
  let $header = $("header");
  let $header_btn = $header.find("nav ul li a");

  $header_btn.click(function() {
    event.preventDefault();
    let $get_href = $(this).attr("href");
    
    if ($("div" + $get_href).hasClass("is-show")) {
      return;
    } else {
      $("a.is-active").removeClass("is-active");
      $(this).addClass("is-active");
      $("div.is-show").removeClass("is-show");
      $("div" + $get_href).addClass("is-show");
    };
  });
});