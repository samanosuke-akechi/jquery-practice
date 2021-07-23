$(function() {
  $(".nav-toggle").on({
    click: function() {
      $(".nav-wrapper").toggleClass("open");
      $("span").toggleClass("open");
    }
  })
})