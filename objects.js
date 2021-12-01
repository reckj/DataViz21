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


//test screen objects
console.log(screenObjects.find(element => element.name === 'testobject'));

