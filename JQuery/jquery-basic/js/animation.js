$(function () {
  // id属性がfadeOutの要素がクリックされたら
  $("#fadeOut").on("click", function () {
    // フェードアウトする
    $(".box").fadeOut();
  });
});
