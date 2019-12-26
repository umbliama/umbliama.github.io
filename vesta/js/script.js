$(document).ready(function() {
  var closeBtns = document.querySelectorAll(".close");
  let modals = document.querySelectorAll(".js-modal");

  var quizBtn = document.querySelector("#js-modal-quiz-btn");

  var modal = document.querySelector("#quiz");
  var nextBtn = document.querySelector("#quizNext");
  var signupModal = document.querySelector("#signupModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  quizBtn.onclick = function() {
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

  var signUpBtn = document.getElementById("js-modal-signup");
  var signupModal = document.getElementById("signupModal");
  var span = document.getElementsByClassName("close")[0];
  signUpBtn.onclick = function() {
    signupModal.style.display = "block";
  };

  span.onclick = function() {
    signupModal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      signupModal.style.display = "none";
    }
  };

  var thanksBtn = document.getElementById("js-modal-thanks-btn");
  var myModal = document.getElementById("myModal");

  var span = document.getElementsByClassName("close")[0];

  thanksBtn.onclick = function() {
    myModal.style.display = "block";
  };

  span.onclick = function() {
    myModal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      myModal.style.display = "none";
    }
  };

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

  // Get the button that opens the modal

  $(".owl-carousel-bed").owlCarousel({
    dots: true,
    center: true,
    items: 1,
    dotsClass: "bed__dots",
    dotClass: "bed__dot",
    navText: [
      '<div style="display:none" class="bed__nav"><img src="./img/nav.png"></div>',
      '<div style="display:none" class="bed__nav"><img src="./img/nav.png"></div>'
    ],
    mouseDrag: false
  });
  $(".owl-carousel").owlCarousel({
    dots: true,
    items: 3,
    nav: true,
    loop: true,
    margin: 0,
    navText: [
      '<div class="left_nav"><img src="./img/nav.png"></div>',
      '<div><img src="./img/nav.png"></div>'
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
