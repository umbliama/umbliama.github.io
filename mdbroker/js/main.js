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
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 3,
            variableWidth: true,
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

    $(".section-about-content-main").on("afterChange", function () {
      console.log($(".section-about-content-main").slick("slickCurrentSlide"));
      var currentSlide = $(".section-about-content-main").slick(
        "slickCurrentSlide"
      );
      if (currentSlide > 0) {
        $(".section-about-outer-list__dots-arrow-prevArrow").addClass(
          "section-about-outer-list__dots-arrow-prevArrow--active"
        );
      } else if (currentSlide == 2) {
        $(".section-about-outer-list__dots-arrow-nextArrow").addClass(
          "section-about-outer-list__dots-arrow-nextArrow--inactive"
        );
        $(".section-about-outer-list__dots-arrow-prevArrow").addClass(
          "section-about-outer-list__dots-arrow-prevArrow--inactive"
        );
      } else if (currentSlide == 0) {
        $(".section-about-outer-list__dots-arrow-prevArrow").removeClass(
          "section-about-outer-list__dots-arrow-prevArrow--active"
        );
      }
      if (currentSlide > 0 && currentSlide < 2) {
        $(".section-about-outer-list__dots-arrow-nextArrow").removeClass(
          "section-about-outer-list__dots-arrow-nextArrow--inactive"
        );
      }
    });
  }
  $(".section-header-outer-background-cover").slick({
    arrows: true,
    dots: true,
    infinite: false,
    prevArrow: $(".section-header-footer-container-prevArrow"),
    nextArrow: $(".section-header-footer-container-nextArrow"),
    customPaging: function (slider, i) {
      return "<span class='section-header__dots-item'></span>";
    },
    appendDots: $(".section-header__dots"),
  });
  $(".section-header-outer-background-cover").on("afterChange", function (
    event,
    slick,
    currentSlide
  ) {
    $.each(slick.$dots, (i, el) => {
      $(el).find("li").eq(currentSlide).addClass("slick-active").find("button");
    });
    $(".js-menu").each(function () {
      $(this).removeClass("active");
      $(".section-header-content-mobile-menu").removeClass("active");
      $(".section-header-content").css("height", "100%");
    });
  });
  var options = {
    index: 3,
    escKey: false,

    // ui option
    timeToIdle: 4000,
  };
  var initPhotoSwipeFromDOM = function (gallerySelector) {
    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function (el) {
      var thumbElements = el.childNodes,
        numNodes = thumbElements.length,
        items = [],
        figureEl,
        linkEl,
        size,
        item;

      for (var i = 0; i < numNodes; i++) {
        figureEl = thumbElements[i]; // <figure> element

        // include only element nodes
        if (figureEl.nodeType !== 1) {
          continue;
        }

        if (figureEl.className.indexOf("slick-cloned") > 0) {
          continue;
        }

        linkEl = figureEl.children[0]; // <a> element

        size = linkEl.getAttribute("data-size").split("x");

        // create slide object
        item = {
          src: linkEl.getAttribute("href"),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10),
        };

        if (figureEl.children.length > 1) {
          // <figcaption> content
          item.title = figureEl.children[1].innerHTML;
        }

        if (linkEl.children.length > 0) {
          // <img> thumbnail element, retrieving thumbnail url
          item.msrc = linkEl.children[0].getAttribute("src");
        }

        item.el = figureEl; // save link to element for getThumbBoundsFn
        items.push(item);
      }

      // console.log(items);
      return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function (e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);

      var eTarget = e.target || e.srcElement;

      // find root element of slide
      var clickedListItem = closest(eTarget, function (el) {
        return el.tagName && el.tagName.toUpperCase() === "FIGURE";
      });

      if (!clickedListItem) {
        return;
      }

      // find index of clicked item by looping through all child nodes
      // alternatively, you may define index via data- attribute
      var clickedGallery = clickedListItem.parentNode,
        childNodes = clickedListItem.parentNode.childNodes,
        numChildNodes = childNodes.length,
        nodeIndex = 0,
        index;

      for (var i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }

        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }
        nodeIndex++;
      }

      if (index >= 0) {
        // open PhotoSwipe if valid index found
        openPhotoSwipe(index, clickedGallery);
      }
      return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function () {
      var hash = window.location.hash.substring(1),
        params = {};

      if (hash.length < 5) {
        return params;
      }

      var vars = hash.split("&");
      for (var i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }
        var pair = vars[i].split("=");
        if (pair.length < 2) {
          continue;
        }
        params[pair[0]] = pair[1];
      }

      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }

      return params;
    };

    var openPhotoSwipe = function (
      index,
      galleryElement,
      disableAnimation,
      fromURL
    ) {
      $("body").addClass("photoSwipeOpen");
      var pswpElement = document.querySelectorAll(".pswp")[0],
        gallery,
        options,
        items;

      items = parseThumbnailElements(galleryElement);

      index -= 1;
      // console.log(index);

      // define options (if needed)
      options = {
        // define gallery index (for URL)
        galleryUID: galleryElement.getAttribute("data-pswp-uid"),

        getThumbBoundsFn: function (index) {
          // See Options -> getThumbBoundsFn section of documentation for more info
          var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
            pageYScroll =
              window.pageYOffset || document.documentElement.scrollTop,
            rect = thumbnail.getBoundingClientRect();

          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        },
      };

      // PhotoSwipe opened from URL
      if (fromURL) {
        if (options.galleryPIDs) {
          // parse real index when custom PIDs are used
          // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
          for (var j = 0; j < items.length; j++) {
            if (items[j].pid == index) {
              options.index = j;
              break;
            }
          }
        } else {
          // in URL indexes start from 1
          options.index = parseInt(index, 10) - 1;
        }
      } else {
        options.index = parseInt(index, 10);
      }

      // exit if index not found
      if (isNaN(options.index)) {
        return;
      }

      if (disableAnimation) {
        options.showAnimationDuration = 0;
      }

      // Pass data to PhotoSwipe and initialize it
      gallery = new PhotoSwipe(
        pswpElement,
        PhotoSwipeUI_Default,
        items,
        options
      );
      gallery.init();

      gallery.listen("close", function () {
        $("body").removeClass("photoSwipeOpen");
      });

      gallery.listen("afterChange", function () {
        var curr = gallery.currItem;
        var index2 = curr.el.dataset.slickIndex;
        console.log(index2);
        // $('.slider-main').slick('slickGoTo', index);

        // $('.slider-main').slick("slickSetOption", 'speed', 1, true);
        // $('.slider-main').slick("slickSetOption", 'waitForAnimate', false, false);
        $(".slider-main").slick("slickGoTo", index2);
        // $('.slider-main').slick("slickSetOption", 'speed', 300, true);
        // $('.slider-main').slick("slickSetOption", 'waitForAnimate', true, false);
      });
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute("data-pswp-uid", i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
      openPhotoSwipe(
        hashData.pid,
        galleryElements[hashData.gid - 1],
        true,
        true
      );
    }
  };

  // execute above function
  initPhotoSwipeFromDOM(".slider-main");

  $(document).ready(function () {
    $(".slider-main").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: ".slider-nav",
      accessibility: false,
      speed: 300,
    });

    $(".slider-nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".slider-main",
      focusOnSelect: true,
      accessibility: false,
      arrows: false,
      speed: 1,
      width: 300,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
      ],
    });

    //remove active class from all thumbnail slides
    $(".slider-nav .slick-slide").removeClass("slick-active");

    //set active class to first thumbnail slides
    $(".slider-nav .slick-slide").eq(0).addClass("slick-active");

    // On before slide change match active thumbnail to current slide
    $(".slider-main").on("beforeChange", function (
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      var mySlideNumber = nextSlide;
      $(".slider-nav .slick-slide").removeClass("slick-active");
      $(".slider-nav .slick-slide").eq(mySlideNumber).addClass("slick-active");
    });

    $(".slick-1").on("click", function () {
      // $('.slider-main').slick("slickSetOption", 'speed', 1, true);
      $(".slider-main").slick("slickSetOption", "waitForAnimate", false, false);
      $(".slider-main").slick("slickGoTo", 0);
      // $('.slider-main').slick("slickSetOption", 'speed', 300, true);
      $(".slider-main").slick("slickSetOption", "waitForAnimate", true, false);
    });

    $(".slick-2").on("click", function () {
      $(".slider-main").slick("slickGoTo", 1);
    });

    $(".slick-3").on("click", function () {
      $(".slider-main").slick("slickGoTo", 2);
    });
  });
});
