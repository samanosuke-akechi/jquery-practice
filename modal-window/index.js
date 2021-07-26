$(function() {
  let $article = $("article");
  let $modal_title = $(".modal-title");
  let $modal_content = $(".modal-content");
  $article.on("click", function() {
    let $title = $(this).find(".article-container h2").text();
    let $content = $(this).find(".article-container .article-content").text();
    console.log($content);
    $modal_title.text($title)
  })
})