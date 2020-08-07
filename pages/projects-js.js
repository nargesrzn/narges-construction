function more() {
  $(".row-hide").toggleClass("hide");
  if ($("#more").html() === "بیشتر") {
    $("#more").html("کمتر");
  } else {
    $("#more").html("بیشتر");
  }
}
