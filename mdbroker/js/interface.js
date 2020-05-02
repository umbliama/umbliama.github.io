$(".js-menu").on("click", function () {
  $(".section-header-content-mobile-menu").toggleClass("active");
  $(".section-header-content").css("height", "100vh");
});
$(".js-menu-close").on("click", function () {
  $(".section-header-content-mobile-menu").removeClass("active");
  $(".section-header-content").css("height", "100%");
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
if ($("#metroModal").length > 0) {
  var modal = document.getElementById("metroModal");

  // Get the button that opens the modal
  var btn = document.querySelector(".js-metro");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
$(".js-choose-type").on("click", function () {
  $(this).toggleClass("active");
});
