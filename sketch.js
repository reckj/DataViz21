//screen setup variables
let screenScaler = 4; //scaler for work on smaller screens
let screenWidth = 3840 / screenScaler;
let screenHeight = 2160 / screenScaler;

let interActionAreaWidth = screenWidth / 3;
let interActionAreaHeight = screenHeight / 8;


//code flow/structure variables
let state = 0; //states: 0 = start / 1 = running / 2 = info / 3 = end





//OBJECTS FOR MAIN ELEMENTS
//ContentObjects
//ServerObjects
//AgentObjects
//personalCounterObjects
//globalCounterObjects



function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(screenWidth, screenHeight);
  let backgroundColor = color(0, 0, 0, 0);
  background(backgroundColor);
  textSize(22);
}


function draw() {
  
}

function touchMoved() {

}


function checkObjectCollision(object) {
  //check if mouse/touch is over object
}

function animatedMovement(startposition, endposition, speed, movementType) {
  //startposition
  //endposition
  //speed -> animationspeed
  //movementTypes -> arc, line, bezier
}

function highlightObject(object) {
  //highlight animation of object
}

function disappearingObject(object) {
  //make a object dissappear though animation
}