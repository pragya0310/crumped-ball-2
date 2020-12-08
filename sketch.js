const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var IMG;
function preload()
{
  
}
function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700,645,1400,10);
	paper = new PaperBall(200,-5);
	dustbin1 = new Dustbin(width-200,565,20,150);
  dustbin2 = new Dustbin(width-30,565,20,150);
	dustbin3 = new Dustbin(width-115,630,150,20);
	//Create the Bodies Here.

  IMG=loadImage("dustbingreen.png")
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);


  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  imageMode(CENTER)
  image(IMG,width-115,550,210,180)
  drawSprites();
 
}



function keyPressed() {
  if(keyCode === UP_ARROW){}
   
  Matter.Body.applyForce(paper.body,  paper.body.position,  {x:700,y:-700})
}
