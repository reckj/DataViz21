//P5 MAIN SKETCH
function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(screenWidth, screenHeight);
  let backgroundColor = color(100, 100, 100);
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

