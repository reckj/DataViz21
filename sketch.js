//P5 MAIN SKETCH
function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(screenWidth, screenHeight);
  let backgroundColor = '#ffffff';
  background(backgroundColor);
  textSize(22);
  
  //for debug only
  stroke(0);
  strokeWeight(5);
  rect(0, 0, screenWidth, screenHeight);
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
  // is flag touchPossible true?
}

