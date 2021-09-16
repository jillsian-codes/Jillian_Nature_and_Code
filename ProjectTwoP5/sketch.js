let flower;
let bee;

function setup() {
  createCanvas(600, 600);
  flower = new Bot(random (30, 40), color(199, 21, 133), 0, createVector(0, 0));
  //if i have time, make the flower look like this: https://p5js.org/examples/hello-p5-simple-shapes.html
  bee = new Bot(random (10, 20), color(255, 204, 0), 3, createVector(0, 0));
}

function draw() {
  background(20);
  bee.move();
  flower.move();
  bee.display();
  flower.display();
}