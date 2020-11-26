//name spacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;

function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,370,200,20,options);
  World.add(world,ground);

var ball_options = {
  restitution : 1.5
}
  ball = Bodies.circle(200,200,40, ball_options);
  World.add(world,ball);

  /*console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);*/
  
} 

function draw() {
  background("pink"); 
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,40,40);
  
}