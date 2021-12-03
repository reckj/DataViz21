//draw functions for objects

//load image assets
let serverImg;
let emissionImg;
let impactImg;
let imageIconImg;
let videoIconImg;
let textIconImg;
let voiceIconImg;
let entireScreenImg;
let messageIconImg;

function preload() {
    serverImg = loadImage('assets/server.png');
    emissionImg = loadImage('assets/emission.png');
    impactImg = loadImage('assets/impact.png');
    imageIconImg = loadImage('assets/imageIcon.png');
    videoIconImg = loadImage('assets/videoIcon.png');
    textIconImg = loadImage('assets/textIcon.png');
    voiceIconImg = loadImage('assets/voiceIcon.png');
    entireScreenImg = loadImage('assets/entireScreen.png');
    messageIconImg = loadImage('assets/messageIcon.png');
}

//gets Media Object to be drawn
function drawMediaObject(object) {
    //draw Media Object based on object parameters
    //start with Rect wireframe style as placeholder
    rectMode(CORNER);
    noStroke();
    fill(mediaColor);
}

function drawBottomBars() {
    fill(255);
    rectMode(CORNER);
    rect((screenWidth * (16/48)), (screenHeight * (22/27)), (screenWidth * (16/48)), (screenHeight * (4/27)));
    rect((screenWidth * (0/48)), (screenHeight * (26/27)), (screenWidth * (48/48)), (screenHeight * (1/27)));
}

//gets Avatar Object to be drawn
function drawAvatarPersonObject(object) {
    fill(avatarPersonColor);
    noStroke();
    rect(object.pos[0], object.pos[1] - maintextsize, object.size[0], maintextsize);
    textSize(maintextsize);
    fill(0);
    text(object.dataSize.toFixed(1), object.pos[0], object.pos[1]);
}

function drawAvatarGroupObject(object) {
    switch (object.name) {
        case 'avatarObjectSmallGroup1':
            fill('#00B36A');
            break;
        case 'avatarObjectSmallGroup2':
            fill('#4485FF');
            break;
        case 'avatarObjectBigGroup1':
            fill('#FF511B');
            break;
        case 'avatarObjectBigGroup2':
            fill('#AD8DFF');   
            break;
    }
    noStroke();
    rect(object.pos[0], object.pos[1] - maintextsize, object.size[0], maintextsize);
    textSize(maintextsize);
    fill(0);
    text(object.dataSize.toFixed(1), object.pos[0], object.pos[1]);
}

function drawAvatarWorldObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(avatarWorldColor);
    textSize(maintextsize);
    fill(0);
    text(object.dataSize.toFixed(1), object.pos[0] + object.pos[0] * 11 / 100, object.pos[1] - object.pos[1] * 65 / 100);
}

function drawEmissionObject(object) {
    image(emissionImg, object.pos[0], object.pos[1], emissionImg.width / screenScaler, emissionImg.height / screenScaler);
}

function drawServerObject(object) {
    image(serverImg, object.pos[0], object.pos[1], serverImg.width / screenScaler, serverImg.height / screenScaler);
    textSize(maintextsize);
    fill(0);
}

function drawMessageObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(messageColor);
    image(messageIconImg, object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawAvatarSenderObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(avatarSenderColor);
    //rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawGroupSenderObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(groupSenderColor);
    //rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawWorldSenderObject(object) {
    rectMode(CORNER);
    noStroke();
    fill(worldSenderColor);
    //rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawEntireScreen() {
    image(entireScreenImg, 0, 0, screenWidth, screenHeight);
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
    /*
    rectMode(CORNER);
    noStroke();
    fill(0);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
    */
    //image(impactImg, object.pos[0], object.pos[1], impactImg.width / screenScaler, impactImg.height / screenScaler);
    textSize(maintextsize);
    fill(0);
    //text(object.screenName, object.pos[0], object.pos[1] + object.size[1] * 1 / 10);
    text('CO2: ' + dataPersonalImpactObject.co2.toFixed(4) + ' g', object.pos[0] + object.size[0] * 2 / 10, object.pos[1] + object.size[1] * 3.5 / 10);
    text('Water: ' + dataPersonalImpactObject.water.toFixed(4) + ' l', object.pos[0] + object.size[0] * 2 / 10, object.pos[1] + object.size[1] * 4 / 10);
    text('Land: ' + dataPersonalImpactObject.land.toFixed(4) + ' m^2', object.pos[0] + object.size[0] * 2 / 10, object.pos[1] + object.size[1] * 4.5 / 10);
    text('Sent Images: ' + dataPersonalImpactObject.numberImage, object.pos[0] + object.size[0] * 2 / 10, object.pos[1] + object.size[1] * 5.5 / 10);
    text('Sent Videos: ' + dataPersonalImpactObject.numberVideo, object.pos[0] + object.size[0] * 2 / 10, object.pos[1] + object.size[1] * 6 / 10);
    text('Sent Texts: ' + dataPersonalImpactObject.numberText, object.pos[0] + object.size[0] * 2 / 10, object.pos[1] + object.size[1] * 6.5 / 10);
    text('Sent Voicememos: ' + dataPersonalImpactObject.numberVoice, object.pos[0] + object.size[0] * 2 / 10, object.pos[1] + object.size[1] * 7 / 10);
    
    
    textSize(maintextsize * 20 / 10);
    text(dataPersonalImpactObject.dataSize.toFixed(1) + ' MB', object.pos[0] + object.size[0] * 2 / 10, object.pos[1] + object.size[1] * 9.6 / 10);
}