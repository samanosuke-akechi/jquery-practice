$(function() {
  let $header = $("header");
  let $header_coord = $header.offset();

  $(window).on("scroll", function() {
    let absolute_coord = $("html, body").scrollTop();
    console.log(absolute_coord);
  })
})