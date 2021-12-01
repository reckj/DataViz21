//generating all required objects

//screenobject array
const screenObjects = [];

//screenobject array
const dataObjects = [];

//screenobjectbuilderfunction
const screenObjectBuilder = (name, pos, size, screenName, dataSize) => ({
    name,
    pos,
    size,
    screenName,
    dataSize,
  }
);


//Data Object for Calculation Base
const dataCalculationObject = {
  co2: 0.05,
  water: 2,
  land: 0.0035,
}

//Data Object for Personal Impact
const dataPersonalImpactObject = {

}

//Data Object for Comparison
const dataComparisonObject = {

}

//generate all screen objects
screenObjects.push(screenObjectBuilder('testobject', [1,2], [30,50], 'screenname', 394));

screenObjects.push(screenObjectBuilder('mediaObjectImage', [(screenWidth * (19/48)),(screenHeight * (23/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Image', 5));
screenObjects.push(screenObjectBuilder('mediaObjectVideo', [(screenWidth * (22/48)),(screenHeight * (23/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Video', 250));
screenObjects.push(screenObjectBuilder('mediaObjectText', [(screenWidth * (25/48)),(screenHeight * (23/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Text', 0.1));
screenObjects.push(screenObjectBuilder('mediaObjectVoice', [(screenWidth * (28/48)),(screenHeight * (23/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Voice', 1));

screenObjects.push(screenObjectBuilder('avatarObjectPerson1', [(screenWidth * (5/48)),(screenHeight * (17/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Mica', 1));
screenObjects.push(screenObjectBuilder('avatarObjectPerson2', [(screenWidth * (18/48)),(screenHeight * (17/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Elena', 1));
screenObjects.push(screenObjectBuilder('avatarObjectPerson3', [(screenWidth * (33/48)),(screenHeight * (17/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Johannes', 1));
screenObjects.push(screenObjectBuilder('avatarObjectPerson4', [(screenWidth * (42/48)),(screenHeight * (18/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Janosch', 1));

screenObjects.push(screenObjectBuilder('avatarObjectSmallGroup1', [(screenWidth * (35/48)),(screenHeight * (7/27))], [(screenWidth * (3/48)),(screenHeight * (3/27))], 'Family', 5));
screenObjects.push(screenObjectBuilder('avatarObjectSmallGroup2', [(screenWidth * (16/48)),(screenHeight * (8/27))], [(screenWidth * (3/48)),(screenHeight * (3/27))], 'Friends', 8));
screenObjects.push(screenObjectBuilder('avatarObjectBigGroup1', [(screenWidth * (8/48)),(screenHeight * (5/27))], [(screenWidth * (4/48)),(screenHeight * (4/27))], 'Jahrgang', 56));
screenObjects.push(screenObjectBuilder('avatarObjectBigGroup2', [(screenWidth * (28/48)),(screenHeight * (4/27))], [(screenWidth * (4/48)),(screenHeight * (4/27))], 'Fussballmannschaft', 24));
screenObjects.push(screenObjectBuilder('avatarObjectWorld', [(screenWidth * (0/48)),(screenHeight * (0/27))], [(screenWidth * (48/48)),(screenHeight * (3/27))], 'Social Media', 999));

screenObjects.push(screenObjectBuilder('emissionObjectEnergy', [(screenWidth * (0/48)),(screenHeight * (3/27))], [(screenWidth * (6/48)),(screenHeight * (6/27))], 'Energieverbrauch', 100));
screenObjects.push(screenObjectBuilder('emissionObjectWater', [(screenWidth * (42/48)),(screenHeight * (0/27))], [(screenWidth * (6/48)),(screenHeight * (6/27))], 'Wasserverbrauch', 100));
screenObjects.push(screenObjectBuilder('emissionObjectLand', [(screenWidth * (42/48)),(screenHeight * (21/27))], [(screenWidth * (6/48)),(screenHeight * (6/27))], 'Landverbrauch', 100));

screenObjects.push(screenObjectBuilder('serverObjectLand', [(screenWidth * (2/48)),(screenHeight * (14/27))], [(screenWidth * (44/48)),(screenHeight * (4/27))], ' Internet Traffic', 0));

//test screen objects
console.log(screenObjects.find(element => element.name === 'receiverObjectSmallGroup1'));


/*
//objectbuilderfunction
const dataObjectBuilder = (name, totalData, travel, charges, food) => ({
    name,
    totalData,
    travel,
    charges,
    food
  }
);
*/
