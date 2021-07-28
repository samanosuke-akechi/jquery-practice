$(function() {
  let $header_btn = $("header nav ul li a");

  $header_btn.click(function() {
    event.preventDefault();
    let $get_href = $(this).attr("href");
    let $related_div = $("div" + $get_href);
    let $displayed_div = $("main div:visible");
    
    if ($related_div.is(":visible")) {
      return;
    } else {
      $("a.is-active").removeClass("is-active");
      $(this).addClass("is-active");
      $displayed_div.stop(true).fadeOut(function() {
        $related_div.stop(true).fadeIn();
      });
    };
  });
});