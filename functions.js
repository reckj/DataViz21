function checkObjectCollision(object) {
    //check if mouse/touch is over object

    //all the things happening when touching objects
}

function animatedMovement(startposition, endposition, speed, movementType) {
    //startposition
    //endposition
    //speed -> animationspeed
    //movementTypes -> arc, line, bezier
}

//calculate data values for all screen objects
function calculateObjects() {

}

//update all objects with changes resulting through new numbers or actions
function updateObjects() {
    
}

function updateMainEnvironment() {

}

function drawMainEnvironment() {
    drawMediaObject(screenObjects.find(element => element.name === 'mediaObjectImage'));
    drawMediaObject(screenObjects.find(element => element.name === 'mediaObjectVideo'));
    drawMediaObject(screenObjects.find(element => element.name === 'mediaObjectText'));
    drawMediaObject(screenObjects.find(element => element.name === 'mediaObjectVoice'));

    drawAvatarPersonObject(screenObjects.find(element => element.name === 'avatarObjectPerson1'));
    drawAvatarPersonObject(screenObjects.find(element => element.name === 'avatarObjectPerson2'));
    drawAvatarPersonObject(screenObjects.find(element => element.name === 'avatarObjectPerson3'));
    drawAvatarPersonObject(screenObjects.find(element => element.name === 'avatarObjectPerson4'));

    drawAvatarGroupObject(screenObjects.find(element => element.name === 'avatarObjectSmallGroup1'));
    drawAvatarGroupObject(screenObjects.find(element => element.name === 'avatarObjectSmallGroup2'));
    drawAvatarGroupObject(screenObjects.find(element => element.name === 'avatarObjectBigGroup1'));
    drawAvatarGroupObject(screenObjects.find(element => element.name === 'avatarObjectBigGroup2'));

    drawAvatarWorldObject(screenObjects.find(element => element.name === 'avatarObjectWorld'));
}

function drawMainScreen() {
    updateMainEnvironment();
    //animatedMovement();
    drawMainEnvironment();
}

function drawInfoScreen() {

}

function exitInfoScreen() {

}

function updateComparisonEnvironment() {

}

function drawComparisonEnvironment() {

}

function drawComparisonScreen() {
    updateComparisonEnvironment();
    //animatedMovement();
    drawComparisonEnvironment();
}

function resetDataViz () {

}

function drawStartScreen() {

}





function highlightObject(object) {
//highlight animation of object
}

function disappearingObject(object) {
//make a object dissappear though animation
}

function drawGrid() {
    for (var x = 0; x < width; x += width / (screenWidth * (1/48)) ) {
		for (var y = 0; y < height; y += height / (screenHeight * (1/27)) ) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}

}