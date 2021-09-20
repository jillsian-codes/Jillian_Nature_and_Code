let flower;
let bees = []; //a vector of bees
let theChase;
let bounds;
let hiveCount = 20;
let flowerImage;

function setup() {
  //MAKE CANVAS
  createCanvas(800, 800);
  bounds = createVector(400, 400);
  flowerImage = loadImage('flower.png');

  //MAKE BOTS
  flower = new Bot(random (30, 40), color(199, 21, 133), 0, createVector(random(-3, 3), random(-3, 3)), createVector(0, 0));
  for(let i = 0; i < hiveCount; i++){
    bees[i] = new Bot(random (5, 10), color(255, 204, 0), 2, createVector(0, 0), createVector(random(-50, 50), 0));
  }
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
  springer(.1, .09);

  //CHECK FOR COLLISIONS
  flower.checkBounds(bounds);
  for(let i = 0; i < hiveCount; i++){
    bees[i].checkBounds(bounds);
  }
}

function springer(spring, damp){
  //MOVE THE FLOWER
  flower.move();

  for(let i = 0; i < hiveCount; i++){
    if (i == 0){ //if this is the first bee
      //GET THE DISTANCE BETWEEN BEE AND FLOWER
      let deltaX = flower.position.x - bees[i].position.x;
      let deltaY = flower.position.y - bees[i].position.y;

      //MAKE BEES SPRING TOWARD THE FLOWERS
      deltaX *= spring; //make the actual spring much smaller than the distance, but proportional
      deltaY *= spring;
      bees[i].speed.x += deltaX; //add the spring to the bee's speed
      bees[i].speed.y += deltaY;

      bees[i].move(); //move the bee, so it'll spring toward the flower

      //ADD DAMPER SO IT DOESN'T GET TOO CLOSE
      bees[i].speed.x *= damp;
      bees[i].speed.y *= damp;

      flower.displayImage(flowerImage);
      bees[i].display();

    } else{ //for all the following bees, they follow the bee in front of them
      //GET THE DISTANCE BETWEEN BEE AND FLOWER
      let deltaX = bees[i - 1].position.x - bees[i].position.x;
      let deltaY = bees[i - 1].position.y - bees[i].position.y;

      //MAKE BEES SPRING TOWARD THE FLOWERS
      deltaX *= spring; //make the actual spring much smaller than the distance, but proportional
      deltaY *= spring;
      bees[i].speed.x += deltaX; //add the spring to the bee's speed
      bees[i].speed.y += deltaY;

      bees[i].move(); //move the bee, so it'll spring toward the flower

      //ADD DAMPER SO IT DOESN'T GET TOO CLOSE
      bees[i].speed.x *= damp;
      bees[i].speed.y *= damp;

      bees[i].display();
    }
  }
}