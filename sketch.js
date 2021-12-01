//screen setup variables
let screenScaler = 4; //scaler for work on smaller screens
let screenWidth = 3840 / screenScaler;
let screenHeight = 2160 / screenScaler;

let interActionAreaWidth = screenWidth / 3;
let interActionAreaHeight = screenHeight / 8;


//code flow/structure variables
let state = 0; //states: 0 = start / 1 = running / 2 = info / 3 = end


function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(screenWidth, screenHeight);
  let backgroundColor = color(0, 0, 0, 0);
  background(backgroundColor);
  textSize(22);
}


function draw() {
  switch (state) {
    case 0:
      drawStartScreen();
      break;

    case 1:
      calculateObjects();
      updateObjects();
      drawMainScreen();
      break;

    case 2:
      drawInfoScreen();
      break;

    case 3:
      calculateObjects();
      updateObjects();
      drawComparisonScreen();
      break;
  }
  
}

function touchMoved() {

}

