var pageViews = document.querySelector('.pageview-count');
var amount = document.querySelectorAll('.amount');
const slider = document.querySelector('.slider');
const discountSwitch = document.querySelector('.discount-switch');

let sliderValue = 0;
pageViews.innerText = "100K ";
amount[0].innerHTML = "16.00";
amount[1].innerHTML = "16.00";

slider.addEventListener('change', () => {
  result();
  discountSwitch.checked = false;
});

discountSwitch.addEventListener('change', () => {
  if (discountSwitch.checked) {
    sliderValue = slider.value;
    amount[0].innerHTML = discount(parseInt(sliderValue));
    amount[1].innerHTML = discount(parseInt(sliderValue));
  } else {
    result();
  }
});

function result() {
  sliderValue = slider.value;
  switch (sliderValue) {
    case "8":
      let tempAmount = 8;
      pageViews.innerHTML = "10K ";
      amount[0].innerHTML = "8.00";
      amount[1].innerHTML = "8.00";
      break;
    case "12":
      pageViews.innerHTML = "50K ";
      amount[0].innerHTML = "12.00";
      amount[1].innerHTML = "12.00";
      break;
    case "16":
      pageViews.innerText = "100K ";
      amount[0].innerHTML = "16.00";
      amount[1].innerHTML = "16.00";
      break;
    case "20":
      pageViews.innerText = "500K ";
      amount[0].innerHTML = "24.00";
      amount[1].innerHTML = "24.00";
      break;
    case "24":
      pageViews.innerText = "1M ";
      amount[0].innerHTML = "36.00";
      amount[1].innerHTML = "36.00";
      break;
    default:
      pageViews.innerText = "10K ";
      amount[0].innerHTML = "8.00";
      amount[1].innerHTML = "8.00";
      break;
  }
}

function discount(value) {
  return value * 0.75 + ".00";
}
