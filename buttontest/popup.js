if (window.onload) {
  let audio = document.querySelector(".song");
  $(".checkPage").mouseenter(function() {
    audio.play();
  });
  console.log(audio);
} else {
  return false;
}
