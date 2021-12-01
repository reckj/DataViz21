//draw functions for objects

//gets Media Object to be drawn
function drawMediaObject(object) {
    //draw Media Object based on object parameters

    //start with Rect wireframe style as placeholder
    rectMode(CORNER);
    noStroke();
    fill(mediaColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

//gets Avatar Object to be drawn
function drawAvatarPersonObject(object) {
    //draw Avatar Object based on object parameters

    //start with Circle wireframe style as placeholder
    fill(avatarPersonColor);
    noStroke();
    circle(object.pos[0] + object.size[0], object.pos[1] + object.size[0], object.size[0], object.size[1]);
}

function drawAvatarGroupObject(object) {
    fill(avatarGroupColor);
    noStroke();
    circle(object.pos[0] + object.size[0], object.pos[1] + object.size[0], object.size[0], object.size[1]);
}

function drawAvatarWorldObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(avatarWorldColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawGrid(){
    //48 lines vertical lines
    //27 horizontal lines
    for (var x = 0; x < screenWidth; x += screenWidth / (screenWidth * (1/48)) ) {
		for (var y = 0; y < screenHeight; y += screenHeight / (screenHeight * (1/27)) ) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, screenHeight);
			line(0, y, screenWidth, y);
		}
	}
}