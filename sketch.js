let screenScaler = 2; //scaler for work on smaller screens
let screenWidth = 3840 / screenScaler;
let screenHeight = 2160 / screenScaler;

let interActionAreaWidth = screenWidth / 3;
let interActionAreaHeight = screenHeight / 8;

let touchColor = 0;

let ringRadius1 = screenWidth * 4 / 10;
let ringRadius2 = screenWidth * 6 / 10;
let ringRadius3 = screenWidth * 8 / 10;

let serverObject = {
  sizeX: screenWidth * 9 / 10,
  sizeY: screenHeight * 4 / 10,
  posX: screenWidth / 2,
  posY: screenHeight * 6 / 10,
  color: [0, 0, 0, 0],
}

let contentObject1 = {
  sizeX: 50,
  sizeY: 50,
  posX: screenWidth / 2,
  posY: screenHeight - 50,
};



function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(screenWidth, screenHeight);
  let backgroundColor = color('#495773');
  background(backgroundColor);
  textSize(22);
  
}


function draw() {
  clear();
  let backgroundColor = color('#495773');
  background(backgroundColor);
  noStroke();
  
  let ringColor3 = color('#8C1822');
  fill(ringColor3);
  circle(width/2, height, ringRadius3);

  let ringColor2 = color('#BF2A37');
  fill(ringColor2);
  circle(width/2, height, ringRadius2);

  let ringColor1 = color('#F22929');
  fill(ringColor1);
  circle(width/2, height, ringRadius1);

  let c = color(0, 0, 0);
  fill(c);
  rectMode(CENTER);
  rect(width/2, height - interActionAreaHeight/2, interActionAreaWidth, interActionAreaHeight);

  let contentObject1Color = color('#141640');
  fill(contentObject1Color)
  rectMode(CENTER);
  rect(contentObject1.posX, contentObject1.posY, contentObject1.sizeX, contentObject1.sizeY);

  fill(serverObject.color);
  rectMode(CENTER);
  rect(serverObject.posX, serverObject.posY, serverObject.sizeX, serverObject.sizeY);
}

function touchMoved() {
  console.log('mouseY: ' + mouseY);
  if((mouseX > contentObject1.posX - contentObject1.sizeX / 2) &&
  (mouseX < contentObject1.posX + contentObject1.sizeX / 2) &&
  (mouseY > contentObject1.posY - contentObject1.sizeY / 2) &&
  (mouseY < contentObject1.posY + contentObject1.sizeY / 2))
  {
    contentObject1.posX = mouseX;
    contentObject1.posY = mouseY;

    serverObject.color[3] = 40;
    if(mouseY < serverObject.posY + serverObject.sizeY / 2){
      serverObject.color[3] = 80;
    }
  }
  else{
    serverObject.color[3] = 0;
  }
}
