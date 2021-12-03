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
  pos: [(screenWidth * (18.5/48)),(screenHeight * (22.6/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Image',
  dataWeight: 5,
  state: 'passive',
  touchable: true,
  pathName: 'imageIconImg',
})

screenObjects.push({
  name: 'mediaObjectVideo',
  pos: [(screenWidth * (21.5/48)),(screenHeight * (22.6/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Video',
  dataWeight: 250,
  state: 'passive',
  touchable: true,
  pathName: 'videoIconImg',
})

screenObjects.push({
  name: 'mediaObjectText',
  pos: [(screenWidth * (24.7/48)),(screenHeight * (22.6/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Text',
  dataWeight: 0.1,
  state: 'passive',
  touchable: true,
  pathName: 'textIconImg',
})

screenObjects.push({
  name: 'mediaObjectVoice',
  pos: [(screenWidth * (27.7/48)),(screenHeight * (22.6/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Voice',
  dataWeight: 1,
  state: 'passive',
  touchable: true,
  pathName: 'voiceIconImg',
})


screenObjects.push({
  name: 'avatarObjectPerson1',
  pos: [(screenWidth * (5/48)),(screenHeight * (1/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Mica',
  groupSize: 1,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectPerson2',
  pos: [(screenWidth * (22/48)),(screenHeight * (5/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Elena',
  groupSize: 1,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectPerson3',
  pos: [(screenWidth * (30/48)),(screenHeight * (2/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Johannes',
  groupSize: 1,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectPerson4',
  pos: [(screenWidth * (44/48)),(screenHeight * (4/27))],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Janosch',
  groupSize: 1,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})


screenObjects.push({
  name: 'avatarObjectSmallGroup1',
  pos: [(screenWidth * (25/48)),(screenHeight * (7/27))],
  size: [(screenWidth * (3/48)),(screenHeight * (3/27))],
  screenName: 'Family',
  groupSize: 5,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectSmallGroup2',
  pos: [(screenWidth * (30/48)),(screenHeight * (5/27))],
  size: [(screenWidth * (3/48)),(screenHeight * (3/27))],
  screenName: 'Family',
  groupSize: 20,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectBigGroup1',
  pos: [(screenWidth * (11/48)),(screenHeight * (1/27))],
  size: [(screenWidth * (4/48)),(screenHeight * (4/27))],
  screenName: 'Jahrgang',
  groupSize: 1000,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectBigGroup2',
  pos: [(screenWidth * (37/48)),(screenHeight * (3/27))],
  size: [(screenWidth * (4/48)),(screenHeight * (4/27))],
  screenName: 'Fussballmannschaft',
  groupSize: 50,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})

screenObjects.push({
  name: 'avatarObjectWorld',
  pos: [(screenWidth * (18/48)),(screenHeight * (1/27))],
  size: [(screenWidth * (12/48)),(screenHeight * (12/27))],
  screenName: 'Social Media',
  groupSize: 1500,
  dataSize: 0,
  state: 'passive',
  touchable: false,
})


screenObjects.push({
  name: 'emissionObjectCO2',
  pos: [(screenWidth * (1/48)),(screenHeight * (4/27))],
  size: [(screenWidth * (6/48)),(screenHeight * (20.5/27))],
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
  pos: [(screenWidth * (7.3/48)),(screenHeight * (13/27))],
  size: [(screenWidth * (44/48)),(screenHeight * (4/27))],
  screenName: 'Internet Traffic',
  touchable: true,
})


screenObjects.push({
  name: 'messageObject',
  pos: [screenWidth, screenHeight],
  size: [(screenWidth * (3.5/48)),(screenHeight * (3/27))],
  screenName: 'Message',
  touchable: false,
  state: 'passive',
})


screenObjects.push({
  name: 'senderObjectAvatar1',
  pos: [screenWidth * (14/48), screenHeight * (23/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Avatar1 Sender',
  touchable: false,
})


screenObjects.push({
  name: 'senderObjectAvatar2',
  pos: [screenWidth * (18/48), screenHeight * (20/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Avatar Sender2',
  touchable: false,
})

screenObjects.push({
  name: 'senderObjectAvatar3',
  pos: [screenWidth * (29/48), screenHeight * (19/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Avatar Sender3',
  touchable: false,
})

screenObjects.push({
  name: 'senderObjectAvatar4',
  pos: [screenWidth * (32/48), screenHeight * (22/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Avatar Sender4',
  touchable: false,
})

screenObjects.push({
  name: 'senderObjectGroup1',
  pos: [screenWidth * (23/48), screenHeight * (20/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Group Sender1',
  touchable: false,
})

screenObjects.push({
  name: 'senderObjectGroup2',
  pos: [screenWidth * (32/48), screenHeight * (18/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Group Sender2',
  touchable: false,
})

screenObjects.push({
  name: 'senderObjectGroup3',
  pos: [screenWidth * (9/48), screenHeight * (23/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Group Sender3',
  touchable: false,
})

screenObjects.push({
  name: 'senderObjectGroup4',
  pos: [screenWidth * (34/48), screenHeight * (20/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'Group Sender4',
  touchable: false,
})

screenObjects.push({
  name: 'senderObjectWorld',
  pos: [screenWidth * (22/48), screenHeight * (18/27)],
  size: [(screenWidth * (2/48)),(screenHeight * (2/27))],
  screenName: 'World Sender1',
  touchable: false,
})



screenObjects.push({
  name: 'personalImpactObject',
  pos: [screenWidth * (40/48), screenHeight * (14.5/27)],
  size: [(screenWidth * (8/48)),(screenHeight * (11.5/27))],
  screenName: 'Personal Impact',
  touchable: false,
})