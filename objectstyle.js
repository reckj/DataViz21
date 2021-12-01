//draw functions for objects

//gets Media Object to be drawn
function drawMediaObject(object) {
    //draw Media Object based on object parameters

    //start with Rect wireframe style as placeholder
    rectMode(CORNER);
    fill(mediaColor);
    rect(object.pos[0], object.pos[1], object.size[0], object.size[1]);
}

function drawGrid(){
    //48 lines vertical lines
    //27 horizontal lines
}