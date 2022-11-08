const image = $('.crew-img');
const douglas = $('#crew-douglas');
const mark = $('#crew-mark');
const victor = $('#crew-victor');
const anousheh = $('#crew-anousheh');

const post = $('.post');
const name = $('.name');
const about = $('.about');

const url = "https://raw.githubusercontent.com/amulyalovescoding/frontendmentor/main/space-tourism-website-main/starter-code/data.json";

douglas.click( function(){
  fetch(url).then(response => response.json()).then(data =>{
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/"+data.crew[0].images.webp);
    } else {
      image.attr('src', "./starter-code/"+data.crew[0].images.png);
    }
    name.text(data.crew[0].name);
    post.text(data.crew[0].role);
    about.text(data.crew[0].bio);
  });
});

mark.click( function(){
  fetch(url).then(response => response.json()).then(data =>{
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/"+data.crew[1].images.webp);
    } else {
      image.attr('src', "./starter-code/"+data.crew[1].images.png);
    }
    name.text(data.crew[1].name);
    post.text(data.crew[1].role);
    about.text(data.crew[1].bio);
  });
});

victor.click( function(){
  fetch(url).then(response => response.json()).then(data =>{
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/"+data.crew[2].images.webp);
    } else {
      image.attr('src', "./starter-code/"+data.crew[2].images.png);
    }
    name.text(data.crew[2].name);
    post.text(data.crew[2].role);
    about.text(data.crew[2].bio);
  });
});

anousheh.click( function(){
  fetch(url).then(response => response.json()).then(data =>{
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/"+data.crew[3].images.webp);
    } else {
      image.attr('src', "./starter-code/"+data.crew[3].images.png);
    }
    name.text(data.crew[3].name);
    post.text(data.crew[3].role);
    about.text(data.crew[3].bio);
  });
});
