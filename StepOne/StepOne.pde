// Jillian Taylor
// Nature & Code
// Center of Creative Computation | SMU
// September 2, 2021

// Description:
// Simple particle system utilizing 
// an image particle with 
// orientation based on its 
// movement vector.

// Note: 
// Image should be pointing along 
// positive x-axis for orientation.

// Step 01 - single particle

// VARIABLES AND DEFINITIONS

ImageParticle particle;
PImage trash;
int width = 1024;
int height = 768;
float gravity = .3;

// SET UP

void setup(){
  size(1024, 768); // create run panel size
  particle = new ImageParticle(loadImage("paper.png"), new PVector(400, 400), new PVector(width/4, height), new PVector(3.75, -20)); // create the paper ball particle
  // first arg is image url, second arg is image size, third arg is starting position, fourth arg is speed
  trash = loadImage("trash_can.png"); // load trash can image
}

// MAIN METHOD

void draw(){
  background(355, 230, 100); //set background color
  trash.resize(150, 150); //make trash can smaller
  image(trash, (width - 400), (height/1.25)); // move trash can in position, display
  
  particle.create();
  particle.move();
}
