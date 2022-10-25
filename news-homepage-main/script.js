const button = document.querySelector('.navigation-toggler');
const hiddenMenu = document.querySelector('.hidden');
let buttonImg = document.querySelector('.button-img');
let count = 0;

button.addEventListener("click", (obj) => {
  count++;
  hiddenMenu.classList.toggle("visible");

  if (count % 2 != 0) {
    buttonImg.src = "./assets/images/icon-menu-close.svg";
  } else {
    buttonImg.src = "./assets/images/icon-menu.svg";
  }
});
