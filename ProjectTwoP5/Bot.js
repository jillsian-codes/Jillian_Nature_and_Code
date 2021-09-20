class Bot{
    constructor(diameter, color, jitter, speed){
        this.x = width / 2; //starts in the middle
        this.y = height / 2;
        this.diameter = diameter;
        this.color = color;
        this.jitter = jitter; //only bee jitters
        this.speed = speed; //a vector, is random for the flower
        this.position = createVector(0, 0);
    }

    move(){
        //make the bees jitter
        //this.position += (this.jitter, this.jitter);
        //add the actual movement
        //this.position += this.speed;
    }

    display(){
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}