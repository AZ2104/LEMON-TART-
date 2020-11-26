class Box
{
    //all properties
    constructor(x,y,width,height)
    {
        var options = {
            density : 1.0,
            friction : 5.0,
            restitution : 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height =height;

        World.add(world,this.body);
    }

    //function
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("pink");
        fill("purple");
        rect(0, 0, this.width,this.height);
        pop();
    }
}