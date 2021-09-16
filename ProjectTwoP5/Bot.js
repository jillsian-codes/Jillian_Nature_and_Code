class Bot{
    constructor(diameter, color, jitter, speed){
        this.x = width / 2; //starts in the middle
        this.y = height / 2;
        this.diameter = diameter;
        this.color = color;
        this.jitter = jitter; //only bee jitters
        this.speed = speed; //a vector, is random for the flower
    }

    move(){
        //make the bees jitter
        this.x += random(-this.jitter, this.jitter);
        this.y += random(-this.jitter, this.jitter);

        //this.x += this.speed;
        //this.x += this.speed;
    }

    display(){
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}