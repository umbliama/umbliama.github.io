window.onload = function() {
  let audio = document.querySelector(".song");
  $(".checkPage").mouseenter(function() {
    audio.play();
  });
};
