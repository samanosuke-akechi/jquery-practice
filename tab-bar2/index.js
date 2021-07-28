$(function() {
  let $header_btn = $("header nav ul li a");

  $header_btn.click(function() {
    event.preventDefault();
    console.log(this);
  })
})