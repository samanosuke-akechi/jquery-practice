$(function() {
  let $header = $("header");
  let $header_coord = $header.offset();

  $(window).on("scroll", function() {
    console.log("scrolling");
  })
})