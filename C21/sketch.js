var fixedRect, movingRect;
var go1, go2, go3, go4;
function setup() 
{
  createCanvas(600,600);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(50,50,50,50);
  go1.shapeColor = "pink";

  go1.setVelocity(3,2);

  go2 = createSprite(550,50,50,50);
  go2.shapeColor = "turquoise";

  go2.setVelocity(-3,2);

  go3 = createSprite(50,550,50,50);
  go3.shapeColor = "blue";

  go3.setVelocity(3,-2);

  go4 = createSprite(550,550,50,50);
  go4.shapeColor = "purple";

  go4.setVelocity(-3,-2);

}

function draw()
{
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(go1,movingRect))
  {
    movingRect.shapeColor = "teal";
    go1.shapeColor = "teal";
  }
  else
  {
    movingRect.shapeColor = "green";
    go1.shapeColor = "pink";
  }

  bounceOff(go1, go2);
  bounceOff(go3,go4);
  drawSprites();
}

