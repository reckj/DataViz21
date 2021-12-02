function checkObjectCollision(object) {
    //check if mouse/touch is over object
    //all the things happening when touching objects
    if (mouseX > object.pos[0] && mouseX < object.pos[0] + object.size[0] && mouseY > object.pos[1] && mouseY < object.pos[1] + object.size[1]) {
        console.log('over object: ' + object.screenName);
        activeDataWeight = object.dataWeight;
    }
}

function animatedMovement(startposition, endposition, speed, movementType) {
    //startposition
    //endposition
    //speed -> animationspeed
    //movementTypes -> arc, line, bezier
}

/*
//calculate data values for all screen objects
function calculateObjects() {
    // check only objects we have an interest in:
    // e.g. filter for icons
    const filteredObjects = screenObjects.filter(object => {
        return object.type === 'icon'
    })
    */

    //filteredObjects.forEach

function calculateObjects() {
    screenObjects.forEach(function (object) {
        if (object.state == 'active' && (object.name == 'mediaObjectImage' || object.name == 'mediaObjectVideo' || object.name == 'mediaObjectText' || object.name == 'mediaObjectVoice')) {
            switch (object.name) {
                case 'mediaObjectImage':
                    dataPersonalImpactObject.numberImage = dataPersonalImpactObject.numberImage + 1;
                    console.log(object.name + ': ' + dataPersonalImpactObject.numberImage);
                break;
                
                case 'mediaObjectVideo':
                    dataPersonalImpactObject.numberVideo = dataPersonalImpactObject.numberVideo + 1;
                    console.log(object.name + ': ' + dataPersonalImpactObject.numberVideo);
                break;

                case 'mediaObjectText':
                    dataPersonalImpactObject.numberText = dataPersonalImpactObject.numberText + 1;
                    console.log(object.name + ': ' + dataPersonalImpactObject.numberText);
                break;

                case 'mediaObjectVoice':
                    dataPersonalImpactObject.numberVoice = dataPersonalImpactObject.numberVoice + 1;
                    console.log(object.name + ': ' + dataPersonalImpactObject.numberVoice);
                break;
            }
            object.state = 'passive'; 
        }

        if (object.state == 'active' && object.name != 'mediaObjectImage' && object.name != 'mediaObjectVideo' && object.name != 'mediaObjectText' && object.name != 'mediaObjectVoice' && object.name != 'messageObject'){
            object.dataSize = object.dataSize + activeDataWeight * object.groupSize;
            dataPersonalImpactObject.co2 = dataPersonalImpactObject.co2 + activeDataWeight * dataCalculationObject.co2Factor;
            dataPersonalImpactObject.water = dataPersonalImpactObject.water + activeDataWeight * dataCalculationObject.waterFactor;
            dataPersonalImpactObject.land = dataPersonalImpactObject.land + activeDataWeight * dataCalculationObject.landFactor;
            object.state = 'passive';
            console.log(object.name + ' datasize: ' + object.dataSize);
        }
    })
}

//update all objects with changes resulting through new numbers or actions
function updateObjects() {
    
}

function updateMainEnvironment() {

}

function drawMainEnvironment() {
    clear();
    drawGrid();

    drawServerObject(screenObjects.find(element => element.name === 'serverObject'));

    drawSenderObject(screenObjects.find(element => element.name === 'senderImageObject'));
    drawSenderObject(screenObjects.find(element => element.name === 'senderVideoObject'));
    drawSenderObject(screenObjects.find(element => element.name === 'senderTextObject'));
    drawSenderObject(screenObjects.find(element => element.name === 'senderVoiceObject'));


    drawEmissionObject(screenObjects.find(element => element.name === 'emissionObjectCO2'));
    drawEmissionObject(screenObjects.find(element => element.name === 'emissionObjectWater'));
    drawEmissionObject(screenObjects.find(element => element.name === 'emissionObjectLand'));

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
