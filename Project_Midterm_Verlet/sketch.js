//Jillian Taylor
//Code reference: Ira Greenberg
//Nature & Code
//Center of Creative Computation | SMU
//Fall, 2021

//Description:
//Creating a verlet grid
//Animating it to move with the volume of music/audio input

let bounds;
let verletGraph;
let mic;

//todo: change colors using color picker

function setup() {
    //MAKE BACKGROUND
    createCanvas(600, 600, WEBGL);
    bounds = createVector(300, 300, 300);

    //MAKE GRAPH
    verletGraph = new VerletGraph(10, bounds); //parameter is size

    //MAKE MICS
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(28, 100, 105);
    
    rotateY(frameCount*PI/720);
    drawBounds();

    //DRAW GRAPH
    verletGraph.draw();

    //GET VOLUME
    var vol = mic.getLevel();
    verletGraph.jump(vol);

    console.log(vol);
}

function drawBounds(){
    noFill();
    stroke(200, 228, 210);
    box(bounds.x, bounds.y, bounds.z);
}