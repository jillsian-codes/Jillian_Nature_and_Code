// Jillian Taylor
// Code Source: Ira Greenberg
// Nature & Code
// Center of Creative Computation | SMU
// Fall, 2021

// Description:
// Creating a Verlet organism
// based on a Verlet Cube

let bounds; // vector-+++++++++++
let verletBox;

function setup() {
    createCanvas(600, 600, WEBGL);
    bounds = createVector(300, 300, 300);

    verletBox = new VerletBox(createVector(0, 0, 0), 10, .00001, color(85, 134, 140));
    verletBox.nudge(1, createVector(10.01, 25.02, 30.03));
    verletBox.setStyles(5, color(200, 171, 131), color(238, 197, 132));
}

function draw() {
    background(202, 202, 170);

    ambientLight(255); //makes cube visible
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 255, mouseX, mouseY, 250);

    //rotateX(frameCount*PI/720);
    rotateY(frameCount*PI/100);
    drawBounds();
    
   // specularMaterial(250);
    verletBox.verlet();
    verletBox.draw();
    verletBox.boundsCollide(bounds);
}

// NOTE: Needs to be a cube 
function drawBounds() {
    noFill();
    stroke(127, 99, 110);
    box(bounds.x, bounds.y, bounds.z)
}