const scrollToFlats = element => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop
  });
};
let flatBlock = document.querySelector("#section-apartments");
let scrollBtn = document.querySelector(".js-scroll");
scrollBtn.addEventListener("click", () => scrollToFlats(flatBlock));
