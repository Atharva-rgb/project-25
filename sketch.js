
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,bin1,bin2,bin3,base,baseA;
var papera,dustbin,dustbin1;

function setup() {
	
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    paper = new Paper(100,100);
	base = new Bin(400,660,800,50);
	baseA = createSprite(400,650,800,50);
    bin1 = new Bin(725,575,5,140);
    bin2 = new Bin(680,615,124,20);
    bin3 = new Bin(635,585,5,140);
    
    
    dustbin = createSprite(680,550,140,80);
    dustbin1 = loadImage("images/dustbingreen.png");
}


function draw() {
 Engine.update(engine);
  
  rectMode(CENTER);
  background(128,128,128);
  
  paper.display(); 
  base.display(); 
  baseA.shapeColor="pink"; 
  bin1.display();
  bin2.display();
  bin3.display();
  dustbin.addImage("dustbin",dustbin1);
  dustbin.scale = 0.5;
  paper.scale = 5;
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:395,y:-425})
    }
}