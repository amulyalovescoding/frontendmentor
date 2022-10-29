let myChart = document.getElementById("myChart");
let xValues = [];
let yValues = [];


new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      data: yValues
    }]
  },
  options: {}
});

// window.onload=function(){
//   weekly.click();
// };

const url = "./data.json";
fetch(url).then(response => response.json()).then(data =>{
  for (var i = 0; i < data.length; i++) {
    xValues.push(data[i].day);
    yValues.push(data[i].amount);
    console.log(xValues);
    console.log(yValues);
  }
});
