$(".js-menu").on("click", function () {
  $(".section-header-content-mobile-menu").toggleClass("active");

  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".section-header-content").css("height", "100vh");
  } else {
    $(".section-header-content").css("height", "100%");
  }
});
$(".js-menu active").on("click", function () {
  $(".section-header-content-mobile-menu").removeClass("active");
});
if ($("#slider-range").length > 0) {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 10000,
    values: [0, 10000],
    slide: function (event, ui) {
      $("#amount").val(ui.values[0]);
      $("#amount2").val(ui.values[1]);
    },
  });
}
$("#amount").change(function () {
  $("#slider-range").slider("values", 0, $(this).val());
});
$("#amount2").change(function () {
  $("#slider-range").slider("values", 1, $(this).val());
});
$(".js-pagination").on("click", function () {
  $(this).toggleClass("active").siblings().removeClass("active");
});
$(".js-filtres").on("click", function () {
  $(".section-filters-content-controls--hidden").toggleClass("active");
  $(".js-close-filtres").removeClass("hidden");
  $(".section-filters-content-show__btn--close-filtres").addClass("hidden");
  $(this).addClass("hidden");
});
$(".js-close-filtres").on("click", function () {
  $(".section-filters-content-controls--hidden").toggleClass("active");
  $(".js-filtres").removeClass("hidden");
  $(".section-filters-content-show__btn--close-filtres").removeClass("hidden");
});
