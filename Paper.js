class Paper {
    constructor (x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    
    this.Body=Bodies.circle(x,y,width,height,options);
    World.add(world,this.body);

    this.width = width;
    this.height = height;
    }

    display() {
        var pos = this.body.position;
        circle(pos.x, pos.y, this.width, this.height);
    }

}