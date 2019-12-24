$(document).ready(function() {
  var closeBtns = document.querySelectorAll(".close");
  let modals = document.querySelectorAll(".js-modal");
  window.onclick = function(event) {
    for (const modal of modals) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  };

  for (const closeBtn of closeBtns) {
    closeBtn.addEventListener("click", function() {
      for (const modal of modals) {
        modal.style.display = "none";
      }
    });
  }

  var quizBtn = document.getElementById("js-modal-quiz-btn");
  quizBtn.addEventListener("click", function() {
    var modal = document.getElementById("quiz");
    var nextBtn = document.querySelector("#quizNext");
    var signupModal = document.querySelector("#signupModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    this.onclick = function() {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it

    nextBtn.addEventListener("click", function() {
      modal.style.display = "none";
      signupModal.style.display = "block";
    });
  });
  var thanksBtn = document.getElementById("js-modal-thanks-btn");
  thanksBtn.addEventListener("click", function() {
    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    this.onclick = function() {
      modal.style.display = "block";
    };

    span.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });

  // Get the button that opens the modal
  var signUpBtn = document.getElementById("js-modal-signup");
  signUpBtn.addEventListener("click", function() {
    var modal = document.getElementById("signupModal");
    var span = document.getElementsByClassName("close")[0];
    this.onclick = function() {
      modal.style.display = "block";
    };

    span.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });

  $(".owl-carousel-bed").owlCarousel({
    dots: true,
    center: true,
    items: 1,
    dotsClass: "bed__dots",
    dotClass: "bed__dot"
  });
  $(".owl-carousel").owlCarousel({
    dots: true,
    items: 3,
    nav: true,
    loop: true,
    margin: 0,
    navText: [
      '<div class="left_nav"><img src="/img/nav.png"></div>',
      '<div><img src="/img/nav.png"></div>'
    ],
    center: true
  });

  $(".box_img a").hover(
    function() {
      $(this)
        .find("span")
        .fadeOut();
    },
    function() {
      $(this)
        .find("span")
        .fadeIn();
    }
  );
});
