$(function() {
  let $article = $("article");
  let $modal = $(".modal");
  let $modal_title = $(".modal-title");
  let $modal_content = $(".modal-content");
  let $modal_img = $(".modal-img");
  let $modal_bg = $(".modal-bg");
  let $modal_close_btn = $(".modal-close-btn");

  $article.on("click", function() {
    let $title = $(this).find(".article-container h2").text();
    let $content = $(this).find(".article-container .article-content").text();
    let $img = $(this).find(".article-image img").attr("src");

    $modal_title.text($title);
    $modal_content.text($content);
    $modal_img.attr("src", $img);
    $modal.css("display", "block");
  });

  $modal_bg.on("click", function() {
    $modal.css("display", "none");
  });

  $modal_close_btn.on("click", function() {
    $modal.css("display", "none");
  });
})