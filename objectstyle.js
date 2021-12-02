//draw functions for objects

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
    textSize(22);
    fill(0);
    text(object.dataSize, object.pos[0], object.pos[1]);
}

function drawAvatarGroupObject(object) {
    fill(avatarGroupColor);
    noStroke();
    //circle(object.pos[0] + object.size[0], object.pos[1] + object.size[0], object.size[0], object.size[1]);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    textSize(22);
    fill(0);
    text(object.dataSize, object.pos[0], object.pos[1]);
}

function drawAvatarWorldObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(avatarWorldColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    textSize(22);
    fill(0);
    text(object.screenName, object.pos[0], object.pos[1] + object.size[1] / 2);
}

function drawEmissionObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(emissionColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    textSize(14);
    fill(0);
    text(object.screenName, object.pos[0], object.pos[1] + object.size[1] / 2);
}

function drawServerObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(0);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    textSize(14);
    fill(0);
    text(object.screenName, object.pos[0], object.pos[1] + object.size[1] / 2);
}

function drawMessageObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(messageColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawSenderObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(senderColor);
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