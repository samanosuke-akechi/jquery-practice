$(function() {
  let $article = $("article");
  let $modal_title = $(".modal-title");
  let $modal_content = $(".modal-content");
  $article.on("click", function() {
    let $title = $(this).find(".article-container h2").text();
    let $content = $(this).find(".article-container .article-content").text();
    $modal_title.text($title);
    $modal_content.text($content);
    console.log($modal_content.text());
  })
})