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
      if (screenObjects.find(element => element.name === 'messageObject').state == 'active') {
        drawMessageObject(screenObjects.find(element => element.name === 'messageObject'));
        
      }
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
  screenObjects.find(element => element.name === 'messageObject').pos = [mouseX - screenObjects.find(element => element.name === 'messageObject').size[0]/2,
    mouseY - screenObjects.find(element => element.name === 'messageObject').size[1]/2];
}

function touchStarted() {
  screenObjects.find(element => element.name === 'messageObject').pos = [mouseX - screenObjects.find(element => element.name === 'messageObject').size[0]/2,
    mouseY - screenObjects.find(element => element.name === 'messageObject').size[1]/2];

  screenObjects.forEach(function (object) {
    if (object.touchable == true) {
      checkObjectCollision(object);
      screenObjects.find(element => element.name === 'messageObject').state = 'active';
    }
  })
}

function touchEnded() {
  screenObjects.forEach(function (object) {
    if (object.name == 'senderObjectAvatar1' || object.name == 'senderObjectAvatar2' || object.name == 'senderObjectAvatar3' || object.name == 'senderObjectAvatar4' ||
    object.name == 'senderObjectGroup1' || object.name == 'senderObjectGroup2' || object.name == 'senderObjectGroup3' || object.name == 'senderObjectGroup4' || object.name == 'senderObjectWorld') {
      checkObjectCollision(object);
      screenObjects.find(element => element.name === 'messageObject').state = 'passive';
      //activeDataWeight = 0;
    }
  })
}
