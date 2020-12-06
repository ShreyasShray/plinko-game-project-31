const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var ground;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 795, 480, 10);
  for(var k = 0; k <= height; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  
}

function draw() {
  background(0);  
  Engine.update(engine);


  ground.display();
  for (var a = 0; a < divisions.length; a++){
    divisions[a].display();
  }
  for (var b = 0; b < plinkos.length; b++){
    plinkos[b].display();
  }
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }
  for (var c = 0; c < particles.length; c++){
    particles[c].display();
  }
}