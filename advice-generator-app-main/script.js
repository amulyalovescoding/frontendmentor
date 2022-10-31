const adviceId = document.querySelector('.advice-no');
const quote = document.querySelector('.quote');
const button = document.querySelector('.dice-container');

const url = "https://api.adviceslip.com/advice";

onload= function () {
  getQuotes();
}

button.addEventListener('click', ()=>{
  getQuotes();
})

function getQuotes() {
  fetch(url).then(response => response.json()).then(data =>{
    adviceId.innerHTML = data.slip.id;
    quote.innerHTML = data.slip.advice;
    console.log(adviceId.innerHTML);
  });
}
