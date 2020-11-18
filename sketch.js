const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var helicopter,helicopterImg;
var ground;
var package,packageImg,packageBody;
var box1,box2,box3;

function preload(){

packageImg = loadImage ("package.png")
    
helicopterImg = loadImage("helicopter.png")
}


function setup (){
var canvas = createCanvas(500,500);

engine = Engine.create();
world = engine.world;

var choice = {isStatic:true}
ground = Bodies.rectangle(250,490,500,20,choice);
World.add(world,ground);

package  = createSprite(width/2, 80, 10,10); 
package.addImage(packageImg) 
package.scale=0.2;


var option_package = {isStatic : true};
packageBody = Bodies.circle(width/2 , 200 , 5 , option_package);
World.add(world, packageBody);


var options = {isStatic : true}
helicopter  = createSprite(width/2, 200, 10,10,options);
helicopter.addImage(helicopterImg);
helicopter.scale = 0.5;
World.add(world,helicopter);

box1 = new Box (250,475,200,20);
box2 = new Box (355,430,20,100);
box3 = new Box (150,430,20,100);



Engine.run(engine);
  
}

function draw() {
background(220);
    
Engine.update(engine);

var pos = ground.position;
rectMode(CENTER);
rect(pos.x,pos.y,500,20);

package.x = packageBody.position.x 
package.y = packageBody.position.y 

keyPressed();

box1.display();
box2.display();
box3.display();

drawSprites();
}

function keyPressed() {
   if (keyCode === DOWN_ARROW) { 
     Matter.Body.setStatic(packageBody,false); 
    }
    }