$(function() {
  let $article = $("article");
  let $modal = $(".modal");
  let $modal_title = $(".modal-title");
  $article.on("click", function() {
    let $title = $(this).find(".article-container h2").text();
    console.log($title);
  })
})