const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snow;
var bg = "snow3.jpg";

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg); 

  for (var j = 50; j <=width-10; j=j+50)
  {
    snow.push(new Snow(j,375));
  }
  
  Engine.update(engine);

  drawSprites();
}