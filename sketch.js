const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

var engine,world;
var ground;
var polygon;

function setup(){

   createCanvas(1200,400)
   
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20);

    // polygon = new Polygon(200,50);
}
function draw(){
    background("light black")
    Engine.update(engine);

    ground.display();
    // polygon.display();
}
