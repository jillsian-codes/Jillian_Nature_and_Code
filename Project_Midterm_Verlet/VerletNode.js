class VerletNode {

	constructor(pos) {
		this.pos = pos;
		this.radius = 4;
    }

    gravity(boundsVec){
		if(this.pos.y < (boundsVec.y / 2)){
			this.pos.y += 2;
		}
    }

	draw(){
		if(this.pos.y > 75){
			fill(129, 110, 148);
		} else if(this.pos.y < -75){
			fill(75, 33, 66);
		} else{
			fill(116, 34, 108);
		}
		
		noStroke();
		push();
		translate(this.pos.x, this.pos.y, this.pos.z);

		this.radius = 9 - (this.pos.y * (5 / 150));
		sphere(this.radius);

		pop();
	}

    jump(vol){
        this.pos.y -= (vol * 60);

		if(this.pos.y < -150){
			this.pos.y = -150;
		}
    }
}