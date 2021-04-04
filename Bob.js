class bob{
    constructor(x,y,r)
    {
    var paper_options={
        isStatic:false,
        density:2.3,
        restitution:.5,
        friction:0.5
    }

    this.body = Bodies.circle(x,y,r/2,paper_options);
        
    this.radius = r;
        
        World.add(world,this.body)
        
        
    }
    display(){
        var position= this.body.position
        push();
        fill("red")
        ellipseMode(RADIUS)
        ellipse(position.x,position.y,this.radius,this.radius)
        
        pop();
       
    }
}    