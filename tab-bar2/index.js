$(function() {
  let $header_btn = $("header nav ul li a");

  $header_btn.click(function() {
    event.preventDefault();
    let $get_href = $(this).attr("href");
    
    if ($("div" + $get_href).is(":visible")) {
      console.log("Yes");
      return;
    } else {
      console.log("No");
    }
  });
});