document.addEventListener("DOMContentLoaded", function (event) {
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.querySelectorAll(".js-request");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.forEach((btn) => {
    btn.addEventListener("click", function () {
      modal.style.display = "block";
    });
  });

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
