const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var rect1;
var box;
var ground;
var bird;
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
  
    box = Bodies.rectangle (100,100,20,20);
    World.add (world, box);

    ground = Bodies.rectangle (200,350,400,50,{isStatic:true});
    World.add (world, ground);
    ground.shapeColor = "red";

    
    

   
    
   
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
    }
}
 
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box.position.x);
    console.log(box.position.y);
    console.log(box.angle);
    push();
    rectMode(CENTER);
     rect(0,0,20,20);
     translate(box.position.x,box.position.y);
    rotate(box.angles);
     pop ();
     rect(ground.position.x,ground.position.y,400,50,);
    
     
}