let screenWidth = 3840;
let screenHeight = 2160;
let screenScaler = 2; //scaler for work on smaller screens

let interActionAreaWidth = screenWidth / 4;
let interActionAreaHeight = screenHeight / 12;

let touchColor = 0;

let ringRadius1 = screenWidth * 1 / 4;
let ringRadius2 = screenWidth * 1 / 3;
let ringRadius3 = screenWidth * 1 / 2;


function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(screenWidth/screenScaler, screenHeight/screenScaler);
  background(5);
  textSize(22);
  
}


function draw() {
  
  let ringColor3 = color(220, 180, 0);
  fill(ringColor3);
  circle(width/2, height, ringRadius3);

  let ringColor2 = color(200, 200, 0);
  fill(ringColor2);
  circle(width/2, height, ringRadius2);

  let ringColor1 = color(200, 255, 0);
  fill(ringColor1);
  circle(width/2, height, ringRadius1);

  let c = color(touchColor, 0, 0);
  fill(c);
  rectMode(CENTER);
  rect(width/2, height - interActionAreaHeight/2, interActionAreaWidth, interActionAreaHeight);
}

function touchMoved() {
  touchColor = mouseX/10 % 255;
}
