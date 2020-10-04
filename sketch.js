
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,ground,box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//boxPosition=width/2-100;
	//boxY=610

	//box1 = createSprite(730,boxY,20,100);
	//box1.shapeColor=color(255,0,0);
	//box1body = Bodies.rectangle(540,boxY,20,100,{isStatic:true});
	//World.add(world,box1body);

	//box2 = createSprite(820,boxY+40,200,20);
	//box2.shapeColor=color(255,0,0);
	//box2body = Bodies.rectangle(620,boxY+45-20,200,20,{isStatic:true});
	//World.add(world,box2body);

	//box3 = createSprite(920,boxY,20,100);
	//box3.shapeColor=color(255,0,0);
	//box3body = Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true});
	//World.add(world,box3body);
	box1 = new dustbin(820,650,200,20);
	paperBall = new Paper(200,450,70);
	ground = new Ground(600,670,1200,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.display();
  paperBall.display();
  box1.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
	}
}


