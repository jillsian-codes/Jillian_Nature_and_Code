class Emitter{
  
  int numParticles;
  PImage particleImg;
  PVector particleSizeRange;
  PVector emitterPosition;
  PVector emitterForce;
  
  // internal variables
  PVector[] size;
  PVector[] position;
  PVector[] speed;
  ImageParticle particle;
  
  // CONSTRUCTORS
  Emitter(){
  }
  
  Emitter(int numParticles, PImage particleImg, PVector particleSizeRange, PVector emitterPosition, PVector emitterForce){
    // initialize all arg values into the Emitter object
    this.numParticles = numParticles;
    this.particleImg = particleImg;
    this.particleSizeRange = particleSizeRange;
    this.emitterPosition = emitterPosition;
    this.emitterForce = emitterForce;
    
    //create all the parallel arrays of values
    size = new PVector[this.numParticles]; // initialize the size vector to the amount of particles passed in as constructor arg
    position = new PVector[this.numParticles];
    speed = new PVector[this.numParticles];
    
    for (int i=0; i<this.numParticles; i++) { // loop through each array, 
      float x = random(this.particleSizeRange.x, this.particleSizeRange.y); // x will equal a random variable between the x and y value
      size[i] = new PVector(x, x); //this will create square dimenions of a random value
      position[i] = new PVector(this.emitterPosition.x, this.emitterPosition.y); // initialize starting position for all
      speed[i] = new PVector(random(-this.emitterForce.x, this.emitterForce.x), random(-this.emitterForce.y));  // randomized speed
    }
    
    particle = new ImageParticle(this.particleImg); // this only has to be initialized once
  }
  
  void run() {
    for (int i=0; i<this.numParticles; i++) { // for each particle, run the following commands
      pushMatrix(); // anytime i use translate, scale, rotate, image, drawing, put push and pop around to reset the table
      translate(position[i].x, position[i].y); // move the image by a tiny amount
      scale(size[i].x, size[i].y);
      rotate(atan2(position[i].y-height/2, position[i].x-width/2)); // rotate a small amount
      // "atan2" is the measure of an angle between 2 coordinates
      // the angle decreases as the ball gets toward the middle, so it rotates less (it's curr position - the middle coordinate)
      particle.create();
      popMatrix();
      speed[i].y+=gravity; // slowly slowes down upward trajectory
      position[i].add(speed[i]); // moves the ball forward by the current speed
    }
  }
}
