//GLOBAL VARIABLES


//screen setup variables
let screenScaler = 1; //scaler for work on smaller screens
let screenWidth = 3840 / screenScaler;
let screenHeight = 2053 / screenScaler;

let interActionAreaWidth = screenWidth / 3;
let interActionAreaHeight = screenHeight / 8;


//code flow/structure variables
let state = 1; //states: 0 = start / 1 = running / 2 = info / 3 = end
let activeDataWeight = 10;

//textsize
let maintextsize = 35;

//colors for wireframe
let mediaColor = 0;
let avatarPersonColor = [87, 232, 187];
let avatarGroupColor = [101, 138, 255];
let avatarWorldColor = [255, 171, 233];
let emissionColor = '#374C2A';
let messageColor = '#75A631';
let avatarSenderColor = [87, 232, 187, 100];
let groupSenderColor = [101, 138, 255, 100];
let worldSenderColor = [255, 171, 233, 100];