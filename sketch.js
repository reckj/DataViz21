//const api_url = 'https://covid19-api.com/country/code?code=CH&format=json'
//let user_data;

let screenWidth = 3840;
let screenHeight = 2160;
let screenScaler = 2; //scaler for work on smaller screens

function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(screenWidth/screenScaler, screenHeight/screenScaler);
  background(0);
  textSize(22);

  /*
  httpGet(api_url, 'json', false, function (response) {
    user_data = response;
    console.log(user_data);
  });
  */
}


function draw() {
  
}


