class Emitter{
  
  int numParticles;
  PImage particleImg;
  PVector particleSize;
  PVector particlePosition;
  PVector emitterPosition;
  PVector emitterForce;
  
  // internal variables
  PVector[] size;
  PVector[] position;
  PVector[] speed;
  ImageParticle particle;
  
  //CONSTRUCTORS
  Emitter(){
  }
  
  Emitter(int numParticles, PImage particleImg, PVector particleSize, PVector emitterPosition, PVector emitterForce){
    this.numParticles = numParticles;
    this.particleImg = particleImg;
    this.particleSize = particleSize;
    this.emitterPosition = emitterPosition;
    this.emitterForce = emitterForce;
    
    //initialize and populate parallel arrays
    size = new PVector[this.numParticles];
    position = new PVector[this.numParticles];
    speed = new PVector[this.numParticles];
    for (int i=0; i<this.numParticles; i++) {
      float d = random(this.particleSize.x, this.particleSize.y);
      size[i] = new PVector(d, d);
      position[i] = new PVector(this.emitterPosition.x, this.emitterPosition.y);
      speed[i] = new PVector(random(-this.emitterForce.x, this.emitterForce.x), random(-this.emitterForce.y));
    }
    particle = new ImageParticle(this.particleImg);
  }
  
  void run() {
    for (int i=0; i<this.numParticles; i++) {
      pushMatrix();
      translate(position[i].x, position[i].y);
      scale(size[i].x, size[i].y);
      rotate(atan2(position[i].y-height/2, position[i].x-width/2));
      particle.create();
      popMatrix();
      speed[i].y += gravity;
      position[i].add(speed[i]);
    }
  }
}
