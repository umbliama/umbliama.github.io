function main() {
  let btn = document.querySelector(".checkPage");
  btn.addEventListener("mousemove", function() {
    let audio = document.querySelector(".song");
    audio.play();
  });
}
main();
