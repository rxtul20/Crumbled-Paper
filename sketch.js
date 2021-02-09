const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var groundObject	
var world;
var background
var dustBin;
var paper1;
function preload(){
	
}
function setup() {
	createCanvas(1000,400);
	rectMode(CENTER);
	background(200,200,plane)
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(800,1550,width/2,width,);
	dustBin=new dustbin(800,370,100,100);
	paper1= new
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  groundObject.display();
  dustBin.display();
  paper1.display();
}