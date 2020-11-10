var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxLeft, boxBase, boxRight
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	boxLeft=createSprite(300, 620, 20, 100);
	boxLeft.shapeColor = "red";
	// boxLeft.isStatic = false;

	boxBase=createSprite(400, 650, 200, 20);
	boxBase.shapeColor = "red";
	// boxBase.isStatic = false;

	boxRight=createSprite(500, 620, 20, 100);
	boxRight.shapeColor = "red";
	// boxRight.isStatic = false;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxBase = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, boxBase);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  this.body.setStatic(boxLeft, true);
  this.body.setStatic(boxBase, true);
  this.body.setStatic(boxRight, true);

  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);	
	ellipseMode(RADIUS);
	ellipse(packageBody.position.x,packageBody.position.y,10,10)
 }
}




