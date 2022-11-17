const image = $('.planet-img');
const moon = $('.moon');
const mars = $('.mars');
const europa = $('.europa');
const titan = $('.titan');

const planetName = $('.planet-name');
const planetDescription = $('.planet-description');
const distance = $('.distance');
const time = $('.time');

const url = "https://raw.githubusercontent.com/amulyalovescoding/frontendmentor/main/space-tourism-website-main/starter-code/data.json";

$(function() {
  moon.click();
});


moon.click(function() {
  fetch(url).then(response => response.json()).then(data => {
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/" + data.destinations[0].images.webp);
    } else {
      image.attr('src', "./starter-code/" + data.destinations[0].images.png);
    }
    // image.attr('src', 'data.destinations[0].images.webp');
    planetName.text(data.destinations[0].name);
    planetDescription.text(data.destinations[0].description);
    distance.text(data.destinations[0].distance);
    time.text(data.destinations[0].travel);
  });
});

mars.click(function() {
  fetch(url).then(response => response.json()).then(data => {
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/" + data.destinations[1].images.webp);
    } else {
      image.attr('src', "./starter-code/" + data.destinations[1].images.png);
    }
    // image.attr('src', 'data.destinations[0].images.webp');
    planetName.text(data.destinations[1].name);
    planetDescription.text(data.destinations[1].description);
    distance.text(data.destinations[1].distance);
    time.text(data.destinations[1].travel);
  });
});

europa.click(function() {
  fetch(url).then(response => response.json()).then(data => {
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/" + data.destinations[2].images.webp);
    } else {
      image.attr('src', "./starter-code/" + data.destinations[2].images.png);
    }
    planetName.text(data.destinations[2].name);
    planetDescription.text(data.destinations[2].description);
    distance.text(data.destinations[2].distance);
    time.text(data.destinations[2].travel);
  });
});

titan.click(function() {
  fetch(url).then(response => response.json()).then(data => {
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/" + data.destinations[3].images.webp);
    } else {
      image.attr('src', "./starter-code/" + data.destinations[3].images.png);
    }
    planetName.text(data.destinations[3].name);
    planetDescription.text(data.destinations[3].description);
    distance.text(data.destinations[3].distance);
    time.text(data.destinations[3].travel);
  });
});
