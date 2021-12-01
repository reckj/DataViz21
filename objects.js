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

//generate all screen objects
screenObjects.push(screenObjectBuilder('testobject', [1,2], [30,50], 'screenname', 394));

screenObjects.push(screenObjectBuilder('mediaObjectImage', [1520,1840], [160,160], 'Image', 5));
screenObjects.push(screenObjectBuilder('mediaObjectVideo', [1760,1840], [160,160], 'Video', 250));
screenObjects.push(screenObjectBuilder('mediaObjectText', [2000,1840], [160,160], 'Text', 0.1));
screenObjects.push(screenObjectBuilder('mediaObjectVoice', [2240,1840], [160,160], 'Voice', 1));

screenObjects.push(screenObjectBuilder('receiverObjectPerson1', [400,1360], [160,160], 'Mica', 0));
screenObjects.push(screenObjectBuilder('receiverObjectPerson2', [1440,1360], [160,160], 'Elena', 0));
screenObjects.push(screenObjectBuilder('receiverObjectPerson3', [2640,1360], [160,160], 'Johannes', 0));



//test screen objects
console.log(screenObjects.find(element => element.name === 'testobject'));

