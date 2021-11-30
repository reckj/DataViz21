//Replace with the start frame of state A
let startA = 5;
//Replace with the end frame of state A
let endA = 1;
//Replace with the start frame of state B
let startB = 14;
//Replace with the end frame of state B
let endB = 25;
let didPlay = false;
let anim
let lottie;

let x = 0;

let animData;
let soundA;

function preload() {
  animData = loadJSON('heart_icon.json');
  //soundA = loadSound('beat.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0);
  lottie = createDiv();
  let params = {
    container: lottie.elt,
    loop: false,
    autoplay: false,
    animationData: animData,
    renderer: 'svg',
  };
  anim = bodymovin.loadAnimation(params);
  // lottie.mousePressed(animate);
  lottie.position((width-800)/2, (height-600)/2);
  
}

// function mouseWheel(event) {
function mouseDragged() {
  // print(event.delta);
  // print(window.scrollY);
  // let y = window.scrollY;

  //console.log(anim.totalFrames);
  let frame = floor(map(mouseY, 0, height, 0, anim.totalFrames));
  console.log(frame);
  anim.goToAndStop(frame, true);
}

// function draw() {
//   fill(255, 50);
//   ellipse(random(width),random(height), 32);
// }

function animate() {
  soundA.play();
  let targetFrames = [0, 0];
  if (!didPlay) {
    didPlay = true;
    targetFrames = [startA, endA];
  } else {
    didPlay = false;
    targetFrames = [startB, endB]
  }
  anim.playSegments([targetFrames], true);
}