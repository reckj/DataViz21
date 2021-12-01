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

function calculateObjects() {

}

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