$(document).ready(function () {
  if ($(window).width() >= 599) {
    $(".section-hot-outer-list").slick({
      customPaging: function (slider, i) {
        return "<span class='section-hot-outer-list__dots-item'></span>";
      },
      infinite: true,
      arrows: true,
      dots: true,
      dotsClass: "section-hot-outer-list__dots",
      prevArrow: ".section-hot-outer-list__dots-arrow-prevArrow",
      nextArrow: $(".section-hot-outer-list__dots-arrow-nextArrow"),
      appendDots: $(".section-hot-outer-list__dots"),
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
      ],
    });
    $(".section-about-content-main").slick({
      infinite: false,
      customPaging: function (slider, i) {
        console.log(slider);
        return `<span class='section-about-outer-list__dots-number--active'>0${
          i + 1
        }</span>/<span class="section-about-outer-list__dots-number--inactive">0${
          slider.slideCount
        }</span>`;
      },
      arrows: true,
      dots: true,

      dotsClass: "section-about-outer-list__dots",
      appendDots: $(".section-about-outer-list__dots"),
      prevArrow: $(".section-about-outer-list__dots-arrow-prevArrow"),
      nextArrow: $(".section-about-outer-list__dots-arrow-nextArrow"),
    });
  }

  $(".section-header-outer-background-cover").slick({
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      return "<span class='section-header__dots-item'></span>";
    },
    appendDots: $(".section-header__dots"),
  });
});
