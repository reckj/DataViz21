//GLOBAL VARIABLES


//screen setup variables
let screenScaler = 4; //scaler for work on smaller screens
let screenWidth = 3840 / screenScaler;
let screenHeight = 2160 / screenScaler;

let interActionAreaWidth = screenWidth / 3;
let interActionAreaHeight = screenHeight / 8;


//code flow/structure variables
let state = 1; //states: 0 = start / 1 = running / 2 = info / 3 = end

//colors for wireframe
let mediaColor = 0;
let avatarColor = '#ff0000';
