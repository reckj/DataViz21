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

//objectbuilderfunction
const dataObjectBuilder = (name, totalData, travel, charges, food) => ({
    name,
    totalData,
    travel,
    charges,
    food
  }
);
/*
//generate all screen objects
screenObjects.push(screenObjectBuilder('testobject', [1,2], [30,50], 'screenname', 394));

screenObjects.push(screenObjectBuilder('mediaObjectImage', [1520,1840], [160,160], 'Image', 5));
screenObjects.push(screenObjectBuilder('mediaObjectVideo', [1760,1840], [160,160], 'Video', 250));
screenObjects.push(screenObjectBuilder('mediaObjectText', [2000,1840], [160,160], 'Text', 0.1));
screenObjects.push(screenObjectBuilder('mediaObjectVoice', [2240,1840], [160,160], 'Voice', 1));

screenObjects.push(screenObjectBuilder('receiverObjectPerson1', [400,1360], [160,160], 'Mica', 1));
screenObjects.push(screenObjectBuilder('receiverObjectPerson2', [1440,1360], [160,160], 'Elena', 1));
screenObjects.push(screenObjectBuilder('receiverObjectPerson3', [2640,1360], [160,160], 'Johannes', 1));
screenObjects.push(screenObjectBuilder('receiverObjectPerson4', [3360,1360], [160,160], 'Janosch', 1));
screenObjects.push(screenObjectBuilder('receiverObjectSmallGroup1', [2800,560], [240,240], 'Family', 5));
screenObjects.push(screenObjectBuilder('receiverObjectSmallGroup2', [1280,640], [240,240], 'Friends', 8));
screenObjects.push(screenObjectBuilder('receiverObjectBigGroup1', [640,400], [320,320], 'Jahrgang', 56));
screenObjects.push(screenObjectBuilder('receiverObjectBigGroup2', [2240,320], [320,320], 'Fussballmannschaft', 24));
screenObjects.push(screenObjectBuilder('receiverObjectWorld', [0,0], [3840,240], 'Social Media', 999));

screenObjects.push(screenObjectBuilder('emissionObjectEnergy', [0,240], [480,480], 'Energieverbrauch', 100));
screenObjects.push(screenObjectBuilder('emissionObjectWater', [3360,0], [480,480], 'Wasserverbrauch', 100));
screenObjects.push(screenObjectBuilder('emissionObjectLand', [3360,1680], [480,480], 'Landverbrauch', 100));

screenObjects.push(screenObjectBuilder('serverObjectLand', [160,1120], [3520,320], ' Internet Traffic', 0));

//test screen objects
console.log(screenObjects.find(element => element.name === 'receiverObjectSmallGroup1'));
*/
//generate all screen objects
screenObjects.push(screenObjectBuilder('testobject', [1,2], [30,50], 'screenname', 394));

screenObjects.push(screenObjectBuilder('mediaObjectImage', [(screenWidth * (19/48)),(screenHeight * (23/27))], [160,160], 'Image', 5));
screenObjects.push(screenObjectBuilder('mediaObjectVideo', [(screenWidth * (22/48)),(screenHeight * (23/27))], [160,160], 'Video', 250));
screenObjects.push(screenObjectBuilder('mediaObjectText', [2000,1840], [160,160], 'Text', 0.1));
screenObjects.push(screenObjectBuilder('mediaObjectVoice', [2240,1840], [160,160], 'Voice', 1));

screenObjects.push(screenObjectBuilder('receiverObjectPerson1', [400,1360], [160,160], 'Mica', 1));
screenObjects.push(screenObjectBuilder('receiverObjectPerson2', [1440,1360], [160,160], 'Elena', 1));
screenObjects.push(screenObjectBuilder('receiverObjectPerson3', [2640,1360], [160,160], 'Johannes', 1));
screenObjects.push(screenObjectBuilder('receiverObjectPerson4', [3360,1360], [160,160], 'Janosch', 1));
screenObjects.push(screenObjectBuilder('receiverObjectSmallGroup1', [2800,560], [240,240], 'Family', 5));
screenObjects.push(screenObjectBuilder('receiverObjectSmallGroup2', [1280,640], [240,240], 'Friends', 8));
screenObjects.push(screenObjectBuilder('receiverObjectBigGroup1', [640,400], [320,320], 'Jahrgang', 56));
screenObjects.push(screenObjectBuilder('receiverObjectBigGroup2', [2240,320], [320,320], 'Fussballmannschaft', 24));
screenObjects.push(screenObjectBuilder('receiverObjectWorld', [0,0], [3840,240], 'Social Media', 999));

screenObjects.push(screenObjectBuilder('emissionObjectEnergy', [0,240], [480,480], 'Energieverbrauch', 100));
screenObjects.push(screenObjectBuilder('emissionObjectWater', [3360,0], [480,480], 'Wasserverbrauch', 100));
screenObjects.push(screenObjectBuilder('emissionObjectLand', [3360,1680], [480,480], 'Landverbrauch', 100));

screenObjects.push(screenObjectBuilder('serverObjectLand', [160,1120], [3520,320], ' Internet Traffic', 0));

