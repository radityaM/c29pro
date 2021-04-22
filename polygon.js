class Polygon{
    constructor(x,y,radius){
        var options={
            restitution:0,
			friction:1,
			density:1.2
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("polygon.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        image(this.image,-20,-20,this.radius,this.radius);
        pop();
    }
}