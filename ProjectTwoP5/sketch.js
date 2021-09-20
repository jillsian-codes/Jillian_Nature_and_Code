let flower;
let bee;
let theChase;
let bounds;

function setup() {
  //MAKE CANVAS
  createCanvas(800, 800);
  bounds = createVector(400, 400);

  //MAKE BOTS
  flower = new Bot(random (30, 40), color(199, 21, 133), 0, createVector(random(-3, 3), random(-3, 3)));
  //cool flower example: https://p5js.org/examples/hello-p5-simple-shapes.html
  bee = new Bot(random (5, 10), color(255, 204, 0), 2, createVector(0, 0));
}

function draw() {
  //DRAW CANVAS
  background(173, 216, 230);
  translate(width / 2, height / 2);
  
  //ADD BORDER
  strokeWeight(20);
  noFill();
  stroke(50);
  rect(-(bounds.x / 2), -(bounds.y / 2), bounds.x, bounds.y);

  //RUN SIMULATION
  springer(.03, .009);

  //CHECK FOR COLLISIONS
  flower.checkBounds(bounds);
  bee.checkBounds(bounds);
}

function springer(spring, damp){
  //MOVE THE FLOWER
  flower.move();

  //GET THE DISTANCE BETWEEN BEE AND FLOWER
  let deltaX = flower.position.x - bee.position.x;
  let deltaY = flower.position.y - bee.position.y;

  //MAKE BEES SPRING TOWARD THE FLOWERS
  deltaX *= spring; //make the actual spring much smaller than the distance, but proportional
  deltaY *= spring;
  bee.speed.x += deltaX; //add the spring to the bee's speed
  bee.speed.y += deltaY;

  //ADD JITTER IN HERE

  bee.move(); //move the bee, so it'll spring toward the flower

  //ADD DAMPER SO IT DOESN'T GET TOO CLOSE
  bee.speed.x *= damp;
  bee.speed.y *= damp;

  flower.display();
  bee.display();
}