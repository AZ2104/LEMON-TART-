class Bird
{
    constructor(x,y)
    {
        var options = {
            density : 2.0,
            friction : 1.0,
            restitution : 0.5
        }
        this.body = Bodies.rectangle(x,y,30,30,options);
        this.width = 30;
        this.height = 30;

        World.add(world,this.body);
    }

    //function
    display()
    {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("red");
        fill("white");
        rect(0, 0, this.width,this.height);
        pop();
    }  
}