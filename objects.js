//generating all required objects

//screenobject array
const screenObjects = [];

//screenobjectbuilderfunction
const screenObjectBuilder = (name, pos, size, screenName, groupSize, dataSize, state) => ({
    name,
    pos,
    size,
    screenName,
    groupSize,
    dataSize,
    state,
  }
);


//Data Object for Calculation Base
const dataCalculationObject = {
  co2Factor: 0.05,     //gCO2 per MB
  waterFactor: 0.002,     //liter per MB
  landFactor: 0.0000035,  //m^2 per MB
  carFactor: 0,
  trainFactor: 0,
  airplaneFactor: 0,
  chargesFactor: 7.8,     //Gramms per Phone Charge 
  tomatosFactor: 0.2,     //Liter Water per Gramm tomatos
}

//Data Object for Personal Impact
const dataPersonalImpactObject = {
  co2: 0,
  water: 0,
  land: 0,
}

//Data Object for Comparison
const dataComparisonObject = {
  car: 0,
  train: 0,
  airplane: 0,
  charges: 0,
  tomatos: 0,
}

//generate all screen objects
screenObjects.push(screenObjectBuilder('mediaObjectImage', [(screenWidth * (19/48)),(screenHeight * (23/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Image', 1, 5, 'passive'));
screenObjects.push(screenObjectBuilder('mediaObjectVideo', [(screenWidth * (22/48)),(screenHeight * (23/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Video', 1, 250, 'passive'));
screenObjects.push(screenObjectBuilder('mediaObjectText', [(screenWidth * (25/48)),(screenHeight * (23/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Text', 1, 0.1, 'passive'));
screenObjects.push(screenObjectBuilder('mediaObjectVoice', [(screenWidth * (28/48)),(screenHeight * (23/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Voice', 1, 1, 'passive'));

screenObjects.push(screenObjectBuilder('avatarObjectPerson1', [(screenWidth * (5/48)),(screenHeight * (17/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Mica', 1, 0, 'active'));
screenObjects.push(screenObjectBuilder('avatarObjectPerson2', [(screenWidth * (18/48)),(screenHeight * (17/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Elena', 1, 0, 'passive'));
screenObjects.push(screenObjectBuilder('avatarObjectPerson3', [(screenWidth * (33/48)),(screenHeight * (17/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Johannes', 1, 0, 'passive'));
screenObjects.push(screenObjectBuilder('avatarObjectPerson4', [(screenWidth * (42/48)),(screenHeight * (18/27))], [(screenWidth * (2/48)),(screenHeight * (2/27))], 'Janosch', 1, 0, 'passive'));

screenObjects.push(screenObjectBuilder('avatarObjectSmallGroup1', [(screenWidth * (35/48)),(screenHeight * (7/27))], [(screenWidth * (3/48)),(screenHeight * (3/27))], 'Family', 5, 0, 'passive'));
screenObjects.push(screenObjectBuilder('avatarObjectSmallGroup2', [(screenWidth * (16/48)),(screenHeight * (8/27))], [(screenWidth * (3/48)),(screenHeight * (3/27))], 'Friends', 8, 0, 'passive'));
screenObjects.push(screenObjectBuilder('avatarObjectBigGroup1', [(screenWidth * (8/48)),(screenHeight * (5/27))], [(screenWidth * (4/48)),(screenHeight * (4/27))], 'Jahrgang', 56, 0, 'passive'));
screenObjects.push(screenObjectBuilder('avatarObjectBigGroup2', [(screenWidth * (28/48)),(screenHeight * (4/27))], [(screenWidth * (4/48)),(screenHeight * (4/27))], 'Fussballmannschaft', 24, 0, 'passive'));
screenObjects.push(screenObjectBuilder('avatarObjectWorld', [(screenWidth * (0/48)),(screenHeight * (0/27))], [(screenWidth * (48/48)),(screenHeight * (3/27))], 'Social Media', 999, 0, 'passive'));

screenObjects.push(screenObjectBuilder('emissionObjectEnergy', [(screenWidth * (0/48)),(screenHeight * (3/27))], [(screenWidth * (6/48)),(screenHeight * (6/27))], 'Energieverbrauch', 1, 0, 'passive'));
screenObjects.push(screenObjectBuilder('emissionObjectWater', [(screenWidth * (42/48)),(screenHeight * (0/27))], [(screenWidth * (6/48)),(screenHeight * (6/27))], 'Wasserverbrauch', 1, 0, 'passive'));
screenObjects.push(screenObjectBuilder('emissionObjectLand', [(screenWidth * (42/48)),(screenHeight * (21/27))], [(screenWidth * (6/48)),(screenHeight * (6/27))], 'Landverbrauch', 1, 0, 'passive'));

screenObjects.push(screenObjectBuilder('serverObject', [(screenWidth * (2/48)),(screenHeight * (14/27))], [(screenWidth * (44/48)),(screenHeight * (4/27))], ' Internet Traffic', 0, 0, 'passive'));
