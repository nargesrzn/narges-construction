$(document).ready(function () {
  // hides the loading
  $(".loader-wrapper").hide();
  // opens the hamburger menu
  $("#ham-menu").click(function () {
    $(".menu-wrapper").css("display", "block");
  });
  //closes the hamburger menu
  $("#close").click(function () {
    $(".menu-wrapper").css("display", "none");
  });
});
