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

// VARIABLES AND DEFINITIONS

PImage trash;
float gravity = .3;
Emitter emitter;

// SET UP

void setup(){
  size(1024, 768); // create run panel size
  trash = loadImage("trash_can.png"); // load trash can image
  
  emitter = new Emitter(15, loadImage("paper.png"), new PVector(400, 400), new PVector(width/4, height), new PVector(3.75, -20)); // creates the emitter
}

// MAIN METHOD

void draw(){
  background(355, 230, 100); //set background color
  emitter.run();
}
