var closeMenuButton = document.querySelector(".main-nav .main-nav__button");
var nav = document.querySelector("nav.main-nav");

nav.classList.remove("main-nav--nojs");

closeMenuButton.addEventListener("click", function() {
  if (nav.classList.contains("main-nav--closed")) {
    nav.classList.replace("main-nav--closed", "main-nav--opened");
  } else {
    nav.classList.replace("main-nav--opened", "main-nav--closed");
  }
});

closeMenuButton.click();
