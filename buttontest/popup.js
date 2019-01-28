function main() {
  let audio1 = document.querySelector(".song");
  audio1.play();
}

let btn = document.querySelector(".checkPage");
btn.addEventListener("mousemove", function() {
  main();
});
