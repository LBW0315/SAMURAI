$(function () {
  $("#check").on("click", function () {
    console.log("名前" + $('[name="username"}').val());

    console.log("性別:" + $('[name="gender"]:checked').val());

    console.log("血液型:" + $('[name="blood"]').val());

    $('[name="hobby"]:checked').each(function () {
      console.log("趣味:" + $(this).val());
    });
  });
});
