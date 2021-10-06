//if this class is confusing, go back and watch the Panopto recording from 10/6. he explains the concepts
class VerletToroid{
    constructor(post, r1, r2, slices, connects){
        this.pos = pos; //vector
        this.r1 = r1; //number
        this.r2 = rw; //number
        this.slices = slices; //number
        this.connects = connects; //number

        nodes = []; //verlet nodes
        sticks = []; //verlet sticks
        col; //color

        //calculate nodes
        let theta = 0;

        for(let i = 0; i < this.connects; i++){
            //create tube profile (based on # of connects)
            //create new connects array

            /* z-rotation to calculate connects
            x' = x * cos q = y * sin q
            x' = x * sin q + y * cos q
            z' = z;
            */
            let x = pos.x + Math.cos(theta) * r2;
            let y = pos.y + Math.sin(theta) * r2;

            let connectnodes = [];
            theta += Math.PI * 2 / this.connects;
            
            for (let j = 0; j < this.slices; j++){
                //create copies of tube profiles (based on # of slices)
                nodes[j] = connectNodes;
                /* y-rotation to sweep connects, create slices
                z' = z * cos q - x * sin q
                x' = z * sin q + x * cos q
                y' = y
                */
            }
        }
    }
}

verlet(){

}