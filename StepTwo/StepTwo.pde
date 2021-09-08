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

// Step 02 - many particles in memory 
// (expensive and slow)

// VARIABLES AND DEFINITIONS

int PARTICLE_COUNT = 3;  // constant variable
ImageParticle[] particles; // array of particles this time
PImage trash;
int width = 1024;
int height = 768;
float gravity = .3;

// SET UP

void setup(){
  size(1024, 768); // create run panel size
  trash = loadImage("trash_can.png"); // load trash can image
  
  // create the array of particles
  particles = new ImageParticle[PARTICLE_COUNT]; //initializes on the heap
  for(int i = 0; i < PARTICLE_COUNT; i++){
    particles[i] = new ImageParticle(loadImage("paper.png"), new PVector(random(200, 300), random(200, 300)), new PVector(width/4, height), new PVector(3.75, -20)); // create the paper ball particle
      // recall that first arg is image url, second arg is image size (randomize), third arg is starting position (randomize), fourth arg is speed (randomize)
      // "random" returns a value betweeen the two numbers passed in
  }
}

// MAIN METHOD

void draw(){
  background(355, 230, 100); //set background color
  trash.resize(150, 150); //make trash can smaller
  image(trash, (width - 400), (height/1.25)); // move trash can in position, display
  
  // TODO: can't get it to produce multiple paper balls at one time
  for (ImageParticle p : particles) {
    p.create();
    p.move();
  }
}
