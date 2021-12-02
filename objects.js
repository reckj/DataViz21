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
  carFactor: 0,           //500m pro GB
  trainFactor: 0,         //
  airplaneFactor: 0,      //1.5sec pro GB
  chargesFactor: 7.8,     //Gramms per Phone Charge 
  tomatosFactor: 0.2,     //Liter Water per Gramm tomatos
}

//Data Object for Personal Impact
const dataPersonalImpactObject = {
  co2: 0,
  water: 0,
  land: 0,
  numberImage: 0,
  numberVideo: 0,
  numberText: 0,
  numberVoice: 0,
  dataSize: 0,
}

//Data Object for Comparison
const dataComparisonObject = {
  car: 0,
  train: 0,
  airplane: 0,
  charges: 0,
  tomatos: 0,
}



screenObjects.push({
  name: 'mediaObjectImage',
  pos: [(screenWidth * (19/48)),(screenHeight * (24/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Image',
  dataWeight: 5,
  state: 'passive',
  touchable: true,
})

screenObjects.push({
  name: 'mediaObjectVideo',
  pos: [(screenWidth * (22/48)),(screenHeight * (24/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Video',
  dataWeight: 250,
  state: 'passive',
  touchable: true,
})

screenObjects.push({
  name: 'mediaObjectText',
  pos: [(screenWidth * (25/48)),(screenHeight * (24/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Text',
  dataWeight: 0.1,
  state: 'passive',
  touchable: true,
})

screenObjects.push({
  name: 'mediaObjectVoice',
  pos: [(screenWidth * (28/48)),(screenHeight * (24/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Voice',
  dataWeight: 1,
  state: 'passive',
  touchable: true,
})


screenObjects.push({
  name: 'avatarObjectPerson1',
  pos: [(screenWidth * (5/48)),(screenHeight * (12/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Mica',
  groupSize: 1,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectPerson2',
  pos: [(screenWidth * (18/48)),(screenHeight * (12/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Elena',
  groupSize: 1,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectPerson3',
  pos: [(screenWidth * (33/48)),(screenHeight * (12/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Johannes',
  groupSize: 1,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectPerson4',
  pos: [(screenWidth * (42/48)),(screenHeight * (12/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Janosch',
  groupSize: 1,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})


screenObjects.push({
  name: 'avatarObjectSmallGroup1',
  pos: [(screenWidth * (35/48)),(screenHeight * (7/27))],
  size: [(screenWidth * (3/48)),(screenHeight * (3/27))],
  screenName: 'Family',
  groupSize: 5,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectSmallGroup2',
  pos: [(screenWidth * (16/48)),(screenHeight * (8/27))],
  size: [(screenWidth * (3/48)),(screenHeight * (3/27))],
  screenName: 'Family',
  groupSize: 5,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectBigGroup1',
  pos: [(screenWidth * (8/48)),(screenHeight * (5/27))],
  size: [(screenWidth * (4/48)),(screenHeight * (4/27))],
  screenName: 'Jahrgang',
  groupSize: 56,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectBigGroup2',
  pos: [(screenWidth * (28/48)),(screenHeight * (4/27))],
  size: [(screenWidth * (4/48)),(screenHeight * (4/27))],
  screenName: 'Fussballmannschaft',
  groupSize: 24,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectWorld',
  pos: [(screenWidth * (0/48)),(screenHeight * (0/27))],
  size: [(screenWidth * (48/48)),(screenHeight * (3/27))],
  screenName: 'Social Media',
  groupSize: 999,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})


screenObjects.push({
  name: 'emissionObjectCO2',
  pos: [(screenWidth * (0/48)),(screenHeight * (12/27))],
  size: [(screenWidth * (6/48)),(screenHeight * (6/27))],
  screenName: 'CO2 Verbrauch',
  touchable: false,
})

screenObjects.push({
  name: 'emissionObjectWater',
  pos: [(screenWidth * (0/48)),(screenHeight * (6/27))],
  size: [(screenWidth * (6/48)),(screenHeight * (6/27))],
  screenName: 'Wasserverbrauch',
  touchable: false,
})

screenObjects.push({
  name: 'emissionObjectLand',
  pos: [(screenWidth * (0/48)),(screenHeight * (21/27))],
  size: [(screenWidth * (6/48)),(screenHeight * (6/27))],
  screenName: 'Landverbrauch',
  touchable: false,
})


screenObjects.push({
  name: 'serverObject',
  pos: [(screenWidth * (2/48)),(screenHeight * (14/27))],
  size: [(screenWidth * (44/48)),(screenHeight * (4/27))],
  screenName: 'Internet Traffic',
  touchable: true,
})


screenObjects.push({
  name: 'messageObject',
  pos: [screenWidth, screenHeight],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Message',
  touchable: false,
  state: 'passive',
})


screenObjects.push({
  name: 'senderImageObject',
  pos: [screenWidth * (9/48), screenHeight * (20/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Image Sender',
  touchable: false,
})


screenObjects.push({
  name: 'senderVideoObject',
  pos: [screenWidth * (19/48), screenHeight * (20/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Video Sender',
  touchable: false,
})

screenObjects.push({
  name: 'senderTextObject',
  pos: [screenWidth * (29/48), screenHeight * (20/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Text Sender',
  touchable: false,
})

screenObjects.push({
  name: 'senderVoiceObject',
  pos: [screenWidth * (39/48), screenHeight * (20/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Voice Sender',
  touchable: false,
})

screenObjects.push({
  name: 'personalImpactObject',
  pos: [screenWidth * (44/48), screenHeight * (21/27)],
  size: [(screenWidth * (4/48)),(screenHeight * (6/27))],
  screenName: 'Personal Impact',
  touchable: false,
})