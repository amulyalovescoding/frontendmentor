const body = document.body;
const topTitleContainer = document.querySelectorAll('p');
const darkModeChangerText = document.querySelector('.mode-changer');
const h2 = document.querySelector('h2');
const h3 = document.querySelectorAll('h3');
const h4 = document.querySelectorAll('h4');
const squareBox = document.querySelectorAll('.square-box');
const rectangleBox = document.querySelectorAll('.rectangle-box');
const switchBtn = document.querySelector('.check-input');

window.addEventListener('load', () => {
  switchBtn.click();
});

switchBtn.addEventListener('change', () => {
  if (switchBtn.checked) {
    body.classList.add('dark');
    topTitleContainer[0].classList.add('dark');
    darkModeChangerText.classList.add('dark-mode-changer');
    h2.classList.add('dark');
    addClass(h3);
    addClass(h4);
    addClass(squareBox);
    addClass(rectangleBox);
  } else {
    body.classList.remove('dark');
    topTitleContainer[0].classList.remove('dark-p');
    darkModeChangerText.classList.remove('dark-mode-changer');
    h2.classList.remove('dark');
    removeClass(h3);
    removeClass(h4);
    removeClass(squareBox);
    removeClass(rectangleBox);
  }
});


function addClass(obj) {
  obj.forEach((item, i) => {
    item.classList.add('dark');
  });
}

function removeClass(obj) {
  obj.forEach((item, i) => {
    item.classList.remove('dark');
  });
}
