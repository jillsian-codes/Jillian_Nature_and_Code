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

// Step 03 - Many instances, only 1 
// particle in memory (cheap and fast) 

// my version of step 3 losok svery similar to professor greenberg's because I had so much trouble with this
// i spent many hours and could not figure out how to make this work with an image
// it still does not work as is, with the goal of drawing particles like in professor greenberg's example

// VARIABLES AND DEFINITIONS

PImage trash;
float gravity = .3;
Emitter emitter;
int width = 1024;
int height = 768;

// SET UP

void setup(){
  size(1024, 768, P2D); // create run panel size
  trash = loadImage("trash_can.png"); // load trash can image
  
  emitter = new Emitter(20, loadImage("paper-min.png"), new PVector(5, 10), new PVector(width/4, height), new PVector(3.75, -20)); // creates the emitter
  // first value is numParticles, second is particle image, third is particle size, fourth is the emitter/starting position, and fifth is the emitter force
}

// MAIN METHOD

void draw(){
  background(355, 230, 100); //set background color
  trash.resize(150, 150); //make trash can smaller
  image(trash, (width - 400), (height/1.25)); // move trash can in position, display
  
  emitter.run();
}
