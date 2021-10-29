//Jillian Taylor
//Code reference: Ira Greenberg
//Nature & Code
//Center of Creative Computation | SMU
//Fall, 2021

//Description:
//top-level management of a series of
//connected lines and vertices

/* if size = 3
7-----8-----9
 \     \     \
  4-----5-----6
   \     \     \
    1-----2-----3
    8 triangle faces
*/

/* if size = 2
  3-----4
   \     \
    1-----2
    2 triangle faces
*/

class VerletGraph{

    constructor(size, boundsVec){ //size = number of rows and columns

        this.boundsVec = boundsVec;
        this.size = size;

        this.distanceBetween = (this.boundsVec.x / size);
                
        //starting points: at the bottom left front corner, plus some padding
        this.colCurrPos = (-this.boundsVec.x / 2) + (this.distanceBetween / 2); //x value
        this.rowCurrPos = (this.boundsVec.z / 2) - (this.distanceBetween / 2); //z value
        
        this.nodes = [];
        var numNodes = 0;
        
        for(let i = 1; i <= this.size; i++){ //ROWS
            for(let p = 1; p <= this.size; p++){ //COLUMNS
                this.posVector = createVector(this.colCurrPos, (this.boundsVec.y / 2), this.rowCurrPos); //starts on front left corner

                this.nodes[numNodes] = new VerletNode(this.posVector);
                
                this.colCurrPos += this.distanceBetween;
                numNodes++;

            }
            this.colCurrPos = (-this.boundsVec.x / 2) + (this.distanceBetween / 2); //x value
            this.rowCurrPos -= this.distanceBetween;
        }
    }


    draw(){
        for(let i = 0; i < this.nodes.length; i++){
            this.nodes[i].gravity(this.boundsVec);
        }

        for(let i = 0; i < this.nodes.length; i++){
            this.nodes[i].draw();
        }
    }

    jump(vol){
        vol = vol * 100; 
        if(vol > .25){
            let r = int(random(this.size*this.size));
            this.nodes[r].jump(vol);
        }
    }
}