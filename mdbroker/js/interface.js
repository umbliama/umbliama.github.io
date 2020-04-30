$(".js-menu").on("click", function () {
  $(".section-header-content-mobile-menu").toggleClass("active");
});
$(".js-menu-close").on("click", function () {
  $(".section-header-content-mobile-menu").removeClass("active");
});
