const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball,stick;
var attach;
var dolphine;


function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;

var stick_options ={
    isStatic: true
}
var ball_options ={
   restitution: 1.0     
}

stick = Bodies.rectangle(200,70,300,30,stick_options);
//stick.shapeColor=("blue");
World.add(world,stick);

ball = Bodies.circle(80,200,20,ball_options);
//ball.setCollider("circle",0,0,40);
World.add(world,ball);

attach = new C(stick,ball);

if(keyDown("SPACE")){
    mouseX = ball.x;
    mouseY = ball.y;
}
}

function draw(){
 background(0);
 Engine.update(engine);

 attach.display();

 fill(0,250,250);
 rectMode(CENTER);
 rect(stick.position.x,stick.position.y,200,30);

 fill(200,50,150);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,40,40);

 
drawSprites();
}
