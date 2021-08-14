const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var con;
var con1;
var con2;
var con3;
var con4;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	con= Matter.constraint.create({
		pointA:{x:200,y:20},
		bodyB:ball,
		pointB:{X:0,y:0},
		length:100,
		stiffness:0.1})
		con1= Matter.constraint.create({
			pointA:{x:150,y:20},
			bodyB:ball,
			pointB:{X:0,y:0},
			length:100,
			stiffness:0.1})
  
con= Matter.constraint.create({
    pointA:{x:150,y:20},
    bodyB:ball,
    pointB:{X:0,y:0},
    length:100,
    stiffness:0.1})
}
function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
