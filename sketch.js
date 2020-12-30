
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(700,600,1400,100);
block1=new Dustbin(1000,500,20,110);
block2=new Dustbin(1090,550,170,15);
block3=new Dustbin(1180,500,20,110);

//block1=new Dustbin(550,500,20,150);
//ball = Bodies.circle(200,200,25,{restitution : 1});
ball=new Paper(50,530,20);
//World.add(world,ball);
//block2=new Dustbin()

	Engine.run(engine);
 
}

function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  //block1.collide(ground);
  ball.display();
 //keyPressed();
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-90})
  }
}

 


