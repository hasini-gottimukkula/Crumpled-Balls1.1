
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 60, 20);

	dustbin1 = new dustbin(550, 636, 20, 70);
	dustbin2 = new dustbin(635, 660, 150, 20);
	dustbin3 = new dustbin(720, 636, 20, 70);

	ground = new Ground(400, 680, 800, 20);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	drawSprites();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 60, y: -60 });
	}
}



