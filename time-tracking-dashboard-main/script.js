const work = document.querySelector('.work-time');
const play = document.querySelector('.play-time');
const study = document.querySelector('.study-time');
const exercise = document.querySelector('.exercise-time');
const social = document.querySelector('.social-time');
const selfCare = document.querySelector('.self-care-time');

const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const url = "https://raw.githubusercontent.com/amulyalovescoding/frontendmentor/main/data.json";
// const dataJSON = fetch(url).then(response => response.json()).then(data =>{
//   return data;
// });
window.onload=function(){
  weekly.click();
};


daily.addEventListener('click', (data)=>{

  fetch(url).then(response => response.json()).then(data =>{
    dailyValues(data);
  });

});

weekly.addEventListener('click', (data)=>{
  fetch(url).then(response => response.json()).then(data =>{
    weeklyValues(data);
  });
});

monthly.addEventListener('click', (data)=>{
  fetch(url).then(response => response.json()).then(data =>{
    monthlyValues(data);
  });
});


function dailyValues(data) {
  work.querySelector('h3').innerHTML = data[0].timeframes.daily.current + "hrs ";
  work.querySelector('p').innerHTML = " Last Week - " + data[0].timeframes.daily.previous + "hrs";

  play.querySelector('h3').innerHTML = data[1].timeframes.daily.current + "hrs ";
  play.querySelector('p').innerHTML = " Last Week - " + data[1].timeframes.daily.previous + "hrs";

  study.querySelector('h3').innerHTML = data[2].timeframes.daily.current + "hrs ";
  study.querySelector('p').innerHTML = " Last Week - " + data[2].timeframes.daily.previous + "hrs";

  exercise.querySelector('h3').innerHTML = data[3].timeframes.daily.current + "hrs ";
  exercise.querySelector('p').innerHTML = " Last Week - " + data[3].timeframes.daily.previous + "hrs";

  social.querySelector('h3').innerHTML = data[4].timeframes.daily.current + "hrs ";
  social.querySelector('p').innerHTML = " Last Week - " + data[4].timeframes.daily.previous + "hrs";

  selfCare.querySelector('h3').innerHTML = data[5].timeframes.daily.current + "hrs ";
  selfCare.querySelector('p').innerHTML = " Last Week - " + data[5].timeframes.daily.previous + "hrs";
}

function weeklyValues(data) {
  work.querySelector('h3').innerHTML = data[0].timeframes.weekly.current + "hrs ";
  work.querySelector('p').innerHTML = " Last Week - " + data[0].timeframes.weekly.previous + "hrs";

  play.querySelector('h3').innerHTML = data[1].timeframes.weekly.current + "hrs ";
  play.querySelector('p').innerHTML = " Last Week - " + data[1].timeframes.weekly.previous + "hrs";

  study.querySelector('h3').innerHTML = data[2].timeframes.weekly.current + "hrs ";
  study.querySelector('p').innerHTML = " Last Week - " + data[2].timeframes.weekly.previous + "hrs";

  exercise.querySelector('h3').innerHTML = data[3].timeframes.weekly.current + "hrs ";
  exercise.querySelector('p').innerHTML = " Last Week - " + data[3].timeframes.weekly.previous + "hrs";

  social.querySelector('h3').innerHTML = data[4].timeframes.weekly.current + "hrs ";
  social.querySelector('p').innerHTML = " Last Week - " + data[4].timeframes.weekly.previous + "hrs";

  selfCare.querySelector('h3').innerHTML = data[5].timeframes.weekly.current + "hrs ";
  selfCare.querySelector('p').innerHTML = " Last Week - " + data[5].timeframes.weekly.previous + "hrs";
}

function monthlyValues(data) {
  work.querySelector('h3').innerHTML = data[0].timeframes.monthly.current + "hrs ";
  work.querySelector('p').innerHTML = " Last Week - " + data[0].timeframes.monthly.previous + "hrs";

  play.querySelector('h3').innerHTML = data[1].timeframes.monthly.current + "hrs ";
  play.querySelector('p').innerHTML = " Last Week - " + data[1].timeframes.monthly.previous + "hrs";

  study.querySelector('h3').innerHTML = data[2].timeframes.monthly.current + "hrs ";
  study.querySelector('p').innerHTML = " Last Week - " + data[2].timeframes.monthly.previous + "hrs";

  exercise.querySelector('h3').innerHTML = data[3].timeframes.monthly.current + "hrs ";
  exercise.querySelector('p').innerHTML = " Last Week - " + data[3].timeframes.monthly.previous + "hrs";

  social.querySelector('h3').innerHTML = data[4].timeframes.monthly.current + "hrs ";
  social.querySelector('p').innerHTML = " Last Week - " + data[4].timeframes.monthly.previous + "hrs";

  selfCare.querySelector('h3').innerHTML = data[5].timeframes.monthly.current + "hrs ";
  selfCare.querySelector('p').innerHTML = " Last Week - " + data[5].timeframes.monthly.previous + "hrs";
}
