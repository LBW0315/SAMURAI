$(function () {
  $(document).on("click keydown", (e) => {
    if (e.type === "click") {
      $("div").text("クリックされました！");
      console.log(e.type);
    }
    if (e.type === "keydown") {
      $("div").text(e.key);
      console.log(e.key);
    }
  });
});
