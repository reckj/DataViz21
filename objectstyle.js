//draw functions for objects

//load image assets
let serverImg;

function preload() {
    serverImg = loadImage('assets/server.png');
}

//gets Media Object to be drawn
function drawMediaObject(object) {
    //draw Media Object based on object parameters

    //start with Rect wireframe style as placeholder
    rectMode(CORNER);
    noStroke();
    fill(mediaColor);
    //rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    circle(object.pos[0] + object.size[0] / 2, object.pos[1] + object.size[0] / 2, object.size[0]);
}

//gets Avatar Object to be drawn
function drawAvatarPersonObject(object) {
    fill(avatarPersonColor);
    noStroke();
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    textSize(maintextsize);
    fill(0);
    text(object.dataSize.toFixed(1), object.pos[0], object.pos[1]);
}

function drawAvatarGroupObject(object) {
    fill(avatarGroupColor);
    noStroke();
    //circle(object.pos[0] + object.size[0], object.pos[1] + object.size[0], object.size[0], object.size[1]);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    textSize(maintextsize);
    fill(0);
    text(object.dataSize.toFixed(1), object.pos[0], object.pos[1]);
}

function drawAvatarWorldObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(avatarWorldColor);
    circle(object.pos[0] + object.size[0] / 2, object.pos[1] + object.size[0] / 2, object.size[0]);
    textSize(maintextsize);
    fill(0);
    text(object.screenName, object.pos[0] + object.size[0] * 3 / 10, object.pos[1] + object.size[1] * 1 / 10);
    text(object.dataSize.toFixed(1), object.pos[0], object.pos[1] + object.size[1] * 5 / 10);
}

function drawEmissionObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(emissionColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    textSize(maintextsize);
    fill(0);
    text(object.screenName, object.pos[0], object.pos[1] + object.size[1] / 2);
}

function drawServerObject(object) {
    /*
    rectMode(CORNER);
    noStroke();
    fill(0);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    */

    image(serverImg, object.pos[0], object.pos[1], serverImg.width / screenScaler, serverImg.height / screenScaler);
    textSize(maintextsize);
    fill(0);
    text(object.screenName, object.pos[0], object.pos[1] + object.size[1] / 2);
}

function drawMessageObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(messageColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawAvatarSenderObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(avatarSenderColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawGroupSenderObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(groupSenderColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawWorldSenderObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(worldSenderColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawGrid(){
    //48 lines vertical lines
    //27 horizontal lines
    for (var x = 0; x < screenWidth; x += screenWidth / 48 ) {
		for (var y = 0; y < screenHeight; y += screenHeight / 27 ) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, screenHeight);
			line(0, y, screenWidth, y);
		}
	}
}

function drawPersonalImpactObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(0);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    textSize(maintextsize);
    fill(255);
    text(object.screenName, object.pos[0], object.pos[1] + object.size[1] * 1 / 10);
    text('CO2: ' + dataPersonalImpactObject.co2.toFixed(4) + ' g', object.pos[0], object.pos[1] + object.size[1] * 2 / 10);
    text('Water: ' + dataPersonalImpactObject.water.toFixed(4) + ' l', object.pos[0], object.pos[1] + object.size[1] * 3 / 10);
    text('Land: ' + dataPersonalImpactObject.land.toFixed(4) + ' m^2', object.pos[0], object.pos[1] + object.size[1] * 4 / 10);
}