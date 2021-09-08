
class ImageParticle {

  PImage img;
  PVector size;
  PVector position;
  PVector speed;

  // CONSTRUCTORS
  
  ImageParticle() {
  }

  ImageParticle(PImage img, PVector size, PVector position, PVector speed) {
    // set passed in args equal to variables inside this object
    this.img = img;
    this.size = size;
    this.position = position;
    this.speed = speed;
    img.resize(int(size.x), int(size.y)); // see if i can get this to change during trajectory of flight
  }

 // MOVE THE BALL
 
  void move() {
    speed.y+=gravity; // slowly slowes down upward trajectory
    // the y value starts negative, so the higher it gets, the slower. once it passes zero, it will then switch directions and pick up speed
    position.add(speed); // moves the ball forward by the current speed
    
    if(size.x > 25){ // as ball gets further away, it gets smaller
      size.x = size.x - 2;
      img.resize(int(size.x), int(size.y)); // see if i can get this to change during trajectory of flight 
    }
    if(size.y > 25){ // as ball gets further away, it gets smaller
      size.y = size.y - 2;
      img.resize(int(size.x), int(size.y)); // see if i can get this to change during trajectory of flight 
    }
  }

  // MAKE THE BALL

  void create() {
    pushMatrix(); // anytime i use translate, scale, rotate, image, drawing, put push and pop around to reset the table
    translate(position.x, position.y); // align ball with the new position established in "move" function
    rotate(atan2(position.y-height/2, position.x-width/2)); // rotates the ball a small amount
    // "atan2" is the measure of an angle between 2 coordinates
    // the angle decreases as the ball gets toward the middle, so it rotates less (it's curr position - the middle coordinate)
    image(img, -img.width/2, -img.height/2); //display image
    popMatrix();
  }
}
