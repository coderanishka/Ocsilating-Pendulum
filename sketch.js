const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball,stick;
var attach;



function setup(){
createCanvas(500,500);
engine = Engine.create();
world = engine.world;

var stick_options ={
    isStatic: true
}
var ball_options ={
   restitution: 1.0     
}

stick = Bodies.rectangle(250,70,300,30,stick_options);
World.add(world,stick);

ball = Bodies.circle(80,200,20,ball_options);
World.add(world,ball);

attach = new C(stick,ball);

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

 textSize(15);
 fill(255);
 text("Press 'space' key to hold the Pendulum",120,20);
 text("Press 'Enter' to let the Pendulum oscillate",110,40);
   
 if(keyCode===32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
    }
 
drawSprites();
}
