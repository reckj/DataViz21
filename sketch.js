//const api_url = 'https://covid19-api.com/country/code?code=CH&format=json'
//let user_data;

let screenWidth = 3840;
let screenHeight = 2160;
let screenScaler = 2; //scaler for work on smaller screens

const hammerPlayground = document.getElementById('hammer');
const hammerOptions = {};
const mc = new Hammer(hammerPlayground, hammerOptions);


function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(screenWidth/screenScaler, screenHeight/screenScaler);
  background(255);
  textSize(22);

  /*
  httpGet(api_url, 'json', false, function (response) {
    user_data = response;
    console.log(user_data);
  });
  */
}


function draw() {
  mc.on('singletap doubletap', (event) => {
    //hammerPlayground.textContent = event.type + ' ';
    console.log('event: ', event);
  });
  
}


