const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var ground;
var box1,box,box2,box3,box4;
var box6,box7,box8;
var boxx,boxx1,boxx2,boxx3,boxx4;
var bird;
var slingshot;
var boxx5;
var boxxx5;
var boxxx1;
function preload() {
  backgroundImg = loadImage("sprites/bg.png");
  background1Image= loadImage("sprites/dark.jpg");
}

function setup() {
  var canvas=createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;

  
  
  ground= new Ground(900,470,4000,20);
  ground.shapeColor="black";

  box1=new Box(800,400,70,70);
  box=new Box(820,400,70,70);
  box2=new Box(840,400,70,70);
  box3=new Box(810,400,70,70);
  box4=new Box(830,400,70,70);
  boxx=new Box(810,380,70,70);
  boxx1=new Box(780,380,70,70);
  boxx2=new Box(800,380,70,70);
  boxx3=new Box(840,380,70,70);
  boxx4=new Box(850,380,70,70);
  box6=new Box(810,350,70,70);
  box7=new Box(820,350,70,70);
  box8=new Box(830,350,70,70);
  boxx5=new Box(825,340,70,70);
  boxxx5=new Box(815,340,70,70);
  boxxx1=new Box(820,310,70,70);

  bird = new Bird(200,50);

  slingshot= new Slingshot(bird.body,{x:200,y:50});
}
 
function draw() {
  background(backgroundImg); 
  Engine.update(engine); 
  ground.display();
  box1.display();
  box.display();
 box2.display();
 box3.display();
 box4.display();
 box6.display();
 box7.display();
 box8.display();
 boxx.display();
 boxx2.display();
 boxx3.display();
 boxx4.display();
 boxx5.display();
 boxxx5.display();
 boxxx1.display();
 slingshot.display();
 bird.display();
 //strokeWeight(3);
 
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

async function getBackgroundImage(){
  var response=await
  fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await
  response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  //console.log(hour);
  if(hour>=6 && hour<=18)
  {bg="sprites/bg.png";}
  else{bg="sprites/dark.jpg"}
}