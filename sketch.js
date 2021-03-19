const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine,world;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
    mango2=new mango(1000,100,30);
	mango3=new mango(1170,100,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1190,200,30);
  mango6=new mango(1050,250,30);
  stoneObj=new Stone(200,500,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  launcherObject = new Launcher(stoneObj.body,{x:235,y:420});
	Engine.run(engine);
}

function draw() {

  background(230);

  Engine.update(engine)

  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
  launcherObject.display();
  groundObject.display();
  
  
}

function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
   launcherObject.fly();
}
function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
    launcherObject.attach(stoneObj.body);
  }
}