//Objectbuilderfunction
const screenObjects = [];

const objectBuilder = (name, posX, posY, sizeX, sizeY, color, state, dataSize, screenName) => ({
    name,
    posX,
    posY,
    sizeX,
    sizeY,
    color,
    state,
    dataSize,
    screenName,
  }
);

//generate objects
screenObjects.push(objectBuilder('testobject', 1,2,2,2,[2,2,2,2],'active'));
screenObjects.push(objectBuilder('testobject2', 1,2,2,2,[2,2,2,2],'passive'));


console.log(screenObjects.find(element => element.name === 'testobject2'));
console.log(screenObjects.find(element => element.name === 'testobject2').color);
