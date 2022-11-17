const image = $('.technology-img');
const launchVehicle = $('#technology-vehicle');
const spacepot = $('#technology-spacepot');
const capsule = $('#technology-capsule');

const name = $('.terminology-name');
const description = $('.description');

const url = "https://raw.githubusercontent.com/amulyalovescoding/frontendmentor/main/space-tourism-website-main/starter-code/data.json";

$(function() {
  launchVehicle.click();
});

launchVehicle.click(function() {
  fetch(url).then(response => response.json()).then(data => {
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/" + data.technology[0].images.portrait);
    } else {
      image.attr('src', "./starter-code/" + data.technology[0].images.landscape);
    }
    name.text(data.technology[0].name);
    description.text(data.technology[0].description);
  });
});

spacepot.click(function() {
  fetch(url).then(response => response.json()).then(data => {
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/" + data.technology[1].images.portrait);
    } else {
      image.attr('src', "./starter-code/" + data.technology[1].images.landscape);
    }
    name.text(data.technology[1].name);
    description.text(data.technology[1].description);
  });
});

capsule.click(function() {
  fetch(url).then(response => response.json()).then(data => {
    if (window.innerWidth >= 992) {
      image.attr('src', "./starter-code/" + data.technology[2].images.portrait);
    } else {
      image.attr('src', "./starter-code/" + data.technology[2].images.landscape);
    }
    name.text(data.technology[2].name);
    description.text(data.technology[2].description);
  });
});
