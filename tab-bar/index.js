$(function() {
  let $header = $("header");
  let $header_btn = $header.find("nav ul li a");

  $header_btn.click(function() {
    event.preventDefault();
    console.log(this);
  })
})