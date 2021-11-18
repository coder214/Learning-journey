const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg;
var appleImg;
var form;
var canvas;
var journey;
var aImg, bImg, cImg, dImg, eImg, fImg, gImg, hImg, iImg, jImg, kImg, lImg;
var alphabets, alphabetsGroup;
var basketImg,basket;
var gameState = 0;

let engine;
let world;

function preload() {
  bg = loadImage("assets/garden.jpg");
  appleImg = loadImage('assets/apple.png');
  aImg = loadImage('assets/A.png');
  bImg = loadImage('assets/B.png');
  cImg = loadImage('assets/C.png');
  dImg = loadImage('assets/D.png');
  eImg = loadImage('assets/E.png');
  fImg = loadImage('assets/F.png');
  gImg = loadImage('assets/G.png');
  hImg = loadImage('assets/H.png');
  iImg = loadImage('assets/I.png');
  jImg = loadImage('assets/J.png');
  kImg = loadImage('assets/K.png');
  lImg = loadImage('assets/L.png');
  basketImg = loadImage('assets/basket.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  form = new Form();
  journey = new Journey();

 basket = createSprite(width/2, height-100);
 basket.addImage(basketImg);
basket.scale = 0.10+0.1;
 basket.visible = false;

 alphabetsGroup = createGroup();
}


function draw() {
  background(bg);
  drawSprites();
 Engine.update(engine);


 if(gameState == 0){
  form.display();
 }

 if(gameState == 1){
   journey.start();
   basket.visible = true;
  // basket.position.x = World.mouseX;
   
  if(keyDown(RIGHT_ARROW)){
    basket.x=basket.x+10;
  }

  if(keyDown(LEFT_ARROW)){
    basket.x=basket.x-10;
  }
 
 }

 if(gameState == 2){
   //basket.visible = false;
   console.log('hi');
   form.display1();
 }

if(gameState == 3){
  journey.start1();
   basket.visible = true;
  // basket.position.x = World.mouseX;
   
  if(keyDown(RIGHT_ARROW)){
    basket.x=basket.x+10;
  }

  if(keyDown(LEFT_ARROW)){
    basket.x=basket.x-10;
  }
}
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}