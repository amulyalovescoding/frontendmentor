const image = $('.planet-img');
const moon = $('.moon');
const mars = $('.mars');
const europa = $('.europa');
const titan = $('.titan');

const planetName = $('.planet-name');
const planetDescription = $('.planet-description');
const distance = $('.distance');
const time = $('.time');

const url = "./starter-code/data.json";

moon.click( function(){
  fetch(url).then(response => response.json()).then(data =>{
    image = data.destinations[0].images.webp;
    planetName = data.destinations[0].description;
  });
});

mars.click( function(){
  fetch(url).then(response => response.json()).then(data =>{
    image = data.destinations[1].images.webp;
    planetName = data.destinations[1].description;
    console.log(planetName);
  });
})
