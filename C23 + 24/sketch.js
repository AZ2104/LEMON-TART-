const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var p1, p2;
var l1, l2, l3, l4;
var bird;


function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200, 20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    p1 = new Pig (810,350);
    l1 = new Log(810,260,300,PI/2);

    box3 = new Box (700,240, 70,70);
    box4 = new Box(920, 240,70,70);
    p2 = new Pig (810, 220);
    l2 = new Log(810,180,300, PI/2);
    
    box5 = new Box (810,160, 70, 70);
    
    l3 = new Log(760,150,150,PI/4);
    l4 = new Log(870,150,150,-PI/4);

    bird = new Bird(200,300);

}

function draw()
{
    background(0);
    Engine.update(engine);

    ground.display(); 

    box1.display();
    box2.display();
    
    p1.display();
    l1.display();

    box3.display();
    box4.display();

    p2.display();
    l2.display();

    box5.display();
    l3.display();
    l4.display();

    bird.display();
    
}