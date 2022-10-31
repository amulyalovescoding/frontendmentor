const button = document.querySelector('.navigation-toggler');
const hiddenMenu = document.querySelector('.hidden');
let buttonImg = document.querySelector('.menu-button-img');
let count = 0;

button.addEventListener("click", (obj) => {
  count++;
  hiddenMenu.classList.toggle("visible");

  if (count % 2 != 0) {
    buttonImg.src = "./images/icon-close-menu.svg";
  } else {
    buttonImg.src = "./images/icon-menu.svg";
  }
});
