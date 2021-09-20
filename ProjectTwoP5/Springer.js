class Springer{

    constructor(flower, bee, spring, damp){
        this.flower = flower;
        this.bee = bee;
        this.spring = spring;
        this.damp = damp;
    }

    run(){
        //todo: nothing inside this function will work at all
    }

    checkBounds(bounds){
        this.flower.checkBounds(bounds);
        this.bee.checkBounds(bounds);
    }
}