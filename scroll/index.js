$(function() {
  let $button = $("button");

  $button.on("click", function() {
    $("html, body").animate({scrollTop: 0}, 250);
  })
})