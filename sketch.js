

//using data from https://api.v2.emissions-api.org/ui/#/default/emissionsapi.web.get_average

const api_url = 'https://covid19-api.com/country/code?code=CH&format=json'


var user_data;
let circleSize = 0;
let rotation = 0;
let colorwheel = 0;

function preload() {
  //uncomment this to do the same using fetch() API
  /*
  fetch(api_url)
    .then(response => response.json())
    .then(data => {
    for (let avg of data){
      avgCo2.push(avg.average.toPrecision(4));
      startDate.push(avg.start.substring(0, 10));
    
      }
   
})
*/
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(125);
  textSize(22);
  //ctx = document.getElementById('co2_CH').getContext('2d');

  httpGet(api_url, 'json', false, function (response) {
    user_data = response;
    //drawOnce();
    console.log(user_data);
  });
}

function drawOnce() {
  console.log(user_data);
  //fill(0);
  //text(user_data[0].deaths, width/2, height/2);
  console.log(user_data[0].deaths);
}

function draw() {
  if(!user_data){
    return;
  }

  if(circleSize < 400){
    circleSize = circleSize + 1;
  }
  else {
    circleSize = 0;
    clear();
    background(125);
  }

  if(rotation > 255) {
    colorwheel = 0;
  }

  rotation = rotation + 0.1;
  //fill(10);
  //circle(width/2,height/2,circleSize + 50);
  fill(255 -  colorwheel, 0,50 + colorwheel/2);
  rectMode(CENTER);
  push();
  translate(width/2, height/2);
  rotate(rotation);
  rect(0, 0, circleSize,circleSize);
  pop();
  fill(20);
  circle(width/2,height/2,circleSize);
  fill(255);
  textSize(circleSize/2);
  textAlign(CENTER, CENTER);
  text(user_data[0].deaths, width/2, height/2);
  

 /*
  if (!user_data) {
    // Wait until the data has loaded before drawing.
    return;
  }


  

  
  
  for (let avg of user_data) {
    avgCo2.push(avg.average.toPrecision(4));
    startDate.push(avg.start.substring(0, 10));


  }

  
  const data = {
    labels: startDate,
    datasets: [{
      label: 'Switzerland',
      data: avgCo2,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  
  if (!lineChart) {

    lineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            stacked: true,
            title: {
              color: 'red',
              display: true,
              text: 'carbon monoxide [mol/m²]',
            }
          },
          x: {
            display: true,
            title: {
              color: 'red',
              display: true,
              text: 'date',
            }
          }
        }
      }
    });
    
  }
  */




}


