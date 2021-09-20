class Bot{
    constructor(diameter, color, jitter, speed, position){
        this.x = width / 2; //starts in the middle
        this.y = height / 2;
        this.diameter = diameter;
        this.color = color;
        this.jitter = jitter; //only bee jitters
        this.speed = speed; //a vector, is random for the flower
        this.position = position; //starting position
    }

    move(){
        //make the bees jitter
        this.position.x += random(-this.jitter, this.jitter);
        this.position.y += random(-this.jitter, this.jitter);

        //move the bot
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }

    display(){
        fill(this.color);
        noStroke();
        ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    }

    displayImage(flowerImage){
        image(flowerImage, this.position.x, this.position.y, 50, 50);
    }

    checkBounds(bounds){
        //RIGHT EDGE
        if(this.position.x > (bounds.x / 2) - this.diameter){ //if outer edge of this circle is outside the bounds
            this.position.x = (bounds.x / 2) - this.diameter; //reset it so that the outer edge of circle is against the side
            this.speed.x = this.speed.x * -1; //reverse it
        }
        
        //LEFT EDGE
        if(this.position.x < -(bounds.x / 2) + this.diameter){ //if outer edge of this circle is outside the bounds
            this.position.x = -(bounds.x / 2) + this.diameter; //reset it so that the outer edge of circle is against the side
            this.speed.x = this.speed.x * -1; //reverse it
        }

        //TOP EDGE
        if(this.position.y > bounds.y / 2 - this.diameter){ //if outer edge of this circle is outside the bounds
            this.position.y = bounds.y / 2 - this.diameter; //reset it so that the outer edge of circle is against the side
            this.speed.y = this.speed.y * -1; //reverse it
        }

        //BOTTOM EDGE
        if(this.position.y < -bounds.y / 2 + this.diameter){ //if outer edge of this circle is outside the bounds
            this.position.y = -bounds.y / 2 + this.diameter; //reset it so that the outer edge of circle is against the side
            this.speed.y = this.speed.y * -1; //reverse it
        }
    }
}