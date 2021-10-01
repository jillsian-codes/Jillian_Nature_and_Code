// Jillian Taylor
// Code Source: Ira Greenberg
// Nature & Code
// Center of Creative Computation | SMU
// Fall, 2021

// Description:
// Creating a Verlet organism
// based on a Verlet Cube

let bounds; // vector-+++++++++++
let verletBoxes = []; // array of boxes
let numBoxes;

function setup() {
    createCanvas(600, 600, WEBGL);
    bounds = createVector(300, 300, 300);
    numBoxes = 5;

    for(let i = 0; i < numBoxes; i++){
        verletBoxes[i] = new VerletBox(createVector(0, 0, 0), random(10, 20), .001, color(85, 134, 140));
        verletBoxes[i].nudge(1, createVector(random(-10.01, 10.01), random(-25.02, 25.02), random(-30.03, 30.03)));
        verletBoxes[i].setStyles(random(5, 10), color(200, 171, 131), color(238, 197, 132));
    }
}

function draw() {
    background(141, 181, 185);

    ambientLight(255); //makes cube visible
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 255, mouseX, mouseY, 250);

    //rotateX(frameCount*PI/720);
    rotateY(frameCount*PI/100);
    drawBounds();
    
   // specularMaterial(250);
   for(let i = 0; i < numBoxes; i++){
        verletBoxes[i].verlet();
        verletBoxes[i].draw();
        verletBoxes[i].boundsCollide(bounds);
   }
}

// NOTE: Needs to be a cube 
function drawBounds() {
    noFill();
    stroke(255, 239, 128);
    strokeWeight(5);
    box(bounds.x, bounds.y, bounds.z)
}