function checkObjectCollision(object) {
    //check if mouse/touch is over object
    //all the things happening when touching objects
    if (mouseX > object.pos[0] && mouseX < object.pos[0] + object.size[0] && mouseY > object.pos[1] && mouseY < object.pos[1] + object.size[1]) {
        console.log('over object: ' + object.screenName);
        if(object.name === 'mediaObjectImage' || object.name === 'mediaObjectVideo' || object.name === 'mediaObjectText' || object.name === 'mediaObjectVoice') {
            activeDataWeight = object.dataWeight;
            console.log(activeDataWeight);
            object.state = 'active';

        }
        switch (object.name) {
            case 'senderObjectAvatar1':
              screenObjects.find(element => element.name === 'avatarObjectPerson1').state = 'active';
            break;

            case 'senderObjectAvatar2':
              screenObjects.find(element => element.name === 'avatarObjectPerson2').state = 'active';
            break;

            case 'senderObjectAvatar3':
              screenObjects.find(element => element.name === 'avatarObjectPerson3').state = 'active';
            break;

            case 'senderObjectAvatar4':
              screenObjects.find(element => element.name === 'avatarObjectPerson4').state = 'active';
            break;

            case 'senderObjectGroup1':
              screenObjects.find(element => element.name === 'avatarObjectSmallGroup1').state = 'active';
            break;

            case 'senderObjectGroup2':
              screenObjects.find(element => element.name === 'avatarObjectSmallGroup2').state = 'active';
            break;

            case 'senderObjectGroup3':
              screenObjects.find(element => element.name === 'avatarObjectBigGroup1').state = 'active';
            break;

            case 'senderObjectGroup4':
              screenObjects.find(element => element.name === 'avatarObjectBigGroup2').state = 'active';
            break;

            case 'senderObjectWorld':
              screenObjects.find(element => element.name === 'avatarObjectWorld').state = 'active';
            break;
        }
    }
}

function animatedMovement(startposition, endposition, speed, movementType) {
    //startposition
    //endposition
    //speed -> animationspeed
    //movementTypes -> arc, line, bezier
}

function calculateObjects() {
    screenObjects.forEach(function (object) {
        if (object.state == 'active') {
          switch (object.name) {
                case 'mediaObjectImage':
                    dataPersonalImpactObject.numberImage = dataPersonalImpactObject.numberImage + 1;
                    console.log(object.name + ': ' + dataPersonalImpactObject.numberImage);
                    object.state = 'passive';
                break;
                
                case 'mediaObjectVideo':
                    dataPersonalImpactObject.numberVideo = dataPersonalImpactObject.numberVideo + 1;
                    console.log(object.name + ': ' + dataPersonalImpactObject.numberVideo);
                    object.state = 'passive';
                break;

                case 'mediaObjectText':
                    dataPersonalImpactObject.numberText = dataPersonalImpactObject.numberText + 1;
                    console.log(object.name + ': ' + dataPersonalImpactObject.numberText);
                    object.state = 'passive';
                break;

                case 'mediaObjectVoice':
                    dataPersonalImpactObject.numberVoice = dataPersonalImpactObject.numberVoice + 1;
                    console.log(object.name + ': ' + dataPersonalImpactObject.numberVoice);
                    object.state = 'passive';
                break;
            }
             
        }

        if (object.state == 'active' && object.name != 'mediaObjectImage' && object.name != 'mediaObjectVideo' && object.name != 'mediaObjectText' && object.name != 'mediaObjectVoice' && object.name != 'messageObject'){
            object.dataSize = object.dataSize + activeDataWeight * object.groupSize;
            dataPersonalImpactObject.co2 = dataPersonalImpactObject.co2 + activeDataWeight * dataCalculationObject.co2Factor;
            dataPersonalImpactObject.water = dataPersonalImpactObject.water + activeDataWeight * dataCalculationObject.waterFactor;
            dataPersonalImpactObject.land = dataPersonalImpactObject.land + activeDataWeight * dataCalculationObject.landFactor;
            if (object.name == 'avatarObjectWorld'){
              dataPersonalImpactObject.dataSize = dataPersonalImpactObject.dataSize + activeDataWeight;
            }
            else {
              dataPersonalImpactObject.dataSize = dataPersonalImpactObject.dataSize + activeDataWeight * object.groupSize;
            }
            object.state = 'passive';
            console.log(object.name + ' datasize: ' + object.dataSize);
            activeDataWeight = 0;
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
    //drawGrid();
    drawEntireScreen();

    //drawServerObject(screenObjects.find(element => element.name === 'serverObject'));
    //drawBottomBars();

    drawAvatarWorldObject(screenObjects.find(element => element.name === 'avatarObjectWorld'));
    drawWorldSenderObject(screenObjects.find(element => element.name === 'senderObjectWorld'));

    drawAvatarSenderObject(screenObjects.find(element => element.name === 'senderObjectAvatar1'));
    drawAvatarSenderObject(screenObjects.find(element => element.name === 'senderObjectAvatar2'));
    drawAvatarSenderObject(screenObjects.find(element => element.name === 'senderObjectAvatar3'));
    drawAvatarSenderObject(screenObjects.find(element => element.name === 'senderObjectAvatar4'));

    drawGroupSenderObject(screenObjects.find(element => element.name === 'senderObjectGroup1'));
    drawGroupSenderObject(screenObjects.find(element => element.name === 'senderObjectGroup2'));
    drawGroupSenderObject(screenObjects.find(element => element.name === 'senderObjectGroup3'));
    drawGroupSenderObject(screenObjects.find(element => element.name === 'senderObjectGroup4'));

    //drawEmissionObject(screenObjects.find(element => element.name === 'emissionObjectCO2'));
    //drawEmissionObject(screenObjects.find(element => element.name === 'emissionObjectWater'));
    //drawEmissionObject(screenObjects.find(element => element.name === 'emissionObjectLand'));

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


    drawPersonalImpactObject(screenObjects.find(element => element.name === 'personalImpactObject'));

    

    
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
