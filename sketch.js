
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,stone,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango
var world,boy,elastic,tree,ground;

function preload(){
	boy=loadImage("images/boy.png");
	stone = loadImage("images/stone.png");
	mango = loadImage("images/mango.png");
	tree = loadImage("images/tree.png")
	

	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2 = new Mango(1000,100,30);
	mango3 = new Mango(1000,200,30);
	mango4 = new Mango(1200,130,30);
	mango5 = new Mango(1250,200,30);
	tree = new Tree(1050,580);
	ground=new Ground(width/2,600,width,20);
	stone = new Stone(300,240,30);
	elastic = new Elastic(stone.body,{x : 125,y : 420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mongo3.display();
  mango4.display();
  mango5.display();
  ground.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  fill(0);
  tectSize(20);
  text("Press space for another chance",50,50,400);
}

function mouseDragged(){
Matter.body.setPosition({x : mouse.X ,y :mouse.Y})
}

function mouseReleased(){
elastic.fly()
}

function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance <= mango.r+stone.r){
		Mango.Body.setStatic(mango.body,false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Mtter.Bodyy.setPosition(stone.body,{x:235,y:420});
		launcherObject.attach(stone.body);
	}
}