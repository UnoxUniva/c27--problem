
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5
var roof1,roof2,roof3,roof4,roof5
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	 bob1 = new bob(700,400,50)
	 bob2 = new bob(550,400,50)
	 bob3 = new bob(300,400,50)
   bob4 = new bob(150,400,50)
	 bob5 = new bob(50,400,50)

	  roof1= new roof(600,50,100,30)
    roof2= new roof(500,50,100,30)
    roof3= new roof(400,50,100,30)
    roof4= new roof(300,50,100,30)
    roof5= new roof(200,50,100,30)
    bobDiameter= 50
  // rope1=new rope(bob1.body, roof5.body, -bobDiameter*-2,0)
  //  rope2=new rope(bob2.body, roof4.body,-bobDiameter*-2.6,2)
   rope3=new rope(bob3.body, roof1.body,-bobDiameter*3,0)
   rope4=new rope(bob4.body, roof4.body, -bobDiameter*0,0)
   rope5=new rope(bob5.body, roof3.body, -bobDiameter*4,2)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof1.display()
  roof2.display()
  roof3.display()
  roof4.display()
  roof5.display()
  
  // rope1.display()
  // rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}



