const myChart = document.querySelector("#myChart");
var xValues = [];
let yValues = [];
var barColors = [];

// fetch JSON data
function getJasonData() {
  const url = "https://raw.githubusercontent.com/amulyalovescoding/frontendmentor/main/expenses-chart-component-main/data.json";
  fetch(url).then(response => response.json()).then(data => {

    for (var i = 0; i < data.length; i++) {
      let x = data[i].day;
      let y = data[i].amount;
      xValues.push(x.toString());
      yValues.push(y);
      console.log(xValues[i]);
      barColors.push("hsl(10, 79%, 65%)");
    }
  });
}

getJasonData();

// find max value in amount array
function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}

// populate chart
function makeChart() {
  let temp = indexOfMax(yValues);
  barColors[temp] = "hsl(186, 34%, 60%)";
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
        hoverBackgroundColor: "hsl(10, 71%, 75%)",
        borderRadius: 5
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          display: false,
        }
      },
      title: {
        display: false
      },
      animation: {
        delay: 500, // change delay to suit your needs.
      }
    }
  });
  console.log(xValues);
  console.log(yValues);
}

// chart function call
onload = (event) => {
  makeChart();
};
