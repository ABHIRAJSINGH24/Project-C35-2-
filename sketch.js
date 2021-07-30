const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground;
var border1,border2,border3;
var basket1,basket2,basket3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,bo11,box12,box13,box14,box15,box16,box17,box18;
var log1;
var Slingshot;
var stone;
var gameState = "play";
var count = 0;
var score = 0;
var flag = 0;

function preload(){
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-5,width,10,"green");
  border1 = new Border(width-5,height/2,10,height,"green");
  border2 = new Border(width-795,height/2,10,height,"green");
  border3 = new Border(width/2,height-395,width,10,"green");
  basket1 = new Basket(width-170,height-95,10,60,"blue");
  basket2 = new Basket2(width-50,height-350,10,60,"yellow");
  basket3 = new Basket3(width/2-300,height-350,60,10,"red");
  box1 = new Box(width-145,height-35,85,50,"brown");
  box2 = new Box(width-217.5,height-65,60,110,"brown");
  box3 = new Box(width-72.5,height-65,60,110,"brown");
  box4 = new Box(width-200,height-140,20,40,"brown");
  box5 = new Box(width-95,height-140,20,40,"brown");
  //log1 = new Log(200,200,300,-PI/7);
  box6 = new Box(width-215,height-165,70,10,"brown");
  box7 = new Box(width-80,height-165,70,10,"brown");
  box8 = new Box(width/4-155,height-290,50,10,"brown");
  box9 = new Box(width/4-45,height-290,50,10,"brown");
  box10 = new Box(width/4-180,height-265,10,50,"brown");
  box11 = new Box(width/4-20,height-265,10,50,"brown");
  box12 = new Box(width/4-155,height-240,50,10,"brown");
  box13 = new Box(width/4-45,height-240,50,10,"brown");
  box14 = new Box2(width/4-80,height-55,10,120,"grey");
  box15 = new Box(width-115,height-300,10,50,"brown");
  box16 = new Box(width-145,height-275,50,10,"brown");
  box17 = new Box(width-135,height-380,50,10,"brown");
  box18 = new Box(width-155,height-370,10,10,"brown");
  stone = new Stone(width/4-80,height-115,45,45);
  Slingshot = new SlingShot(stone.body,{x:width/4-80,y:height-115});

  //Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("steelblue");
  textSize(40);
  fill("limegreen");
  text("5",width-95,height-335);
  text("3",width-155,height-95);
  text("1",width/2-310,height-300);
  textSize(25);
  text("Tries:"+count,width/2,height-365);
  text("Score:"+score,width/2,height-335);
  if(gameState==="play"){
    if(Matter.SAT.collides(stone.body,basket1.body1).collided && flag===0){
      score = score + 3;
      flag = 1;
      gameState = "pause";
    }
    if(Matter.SAT.collides(stone.body,basket1.body2).collided && flag===0){
      score = score + 3;
      flag = 1;
      gameState = "pause";
    }
    if(Matter.SAT.collides(stone.body,basket1.body3).collided && flag===0){
      score = score + 3;
      flag = 1;
      gameState = "pause";
    }
    if(Matter.SAT.collides(stone.body,basket2.body1).collided && flag===0){
      score = score + 5;
      flag = 1;
      gameState = "pause";
    }
    if(Matter.SAT.collides(stone.body,basket2.body2).collided && flag===0){
      score = score + 5;
      flag = 1;
      gameState = "pause";
    }
    if(Matter.SAT.collides(stone.body,basket2.body3).collided && flag===0){
      score = score + 5;
      flag = 1;
      gameState = "pause";
    }
    if(Matter.SAT.collides(stone.body,basket3.body1).collided && flag===0){
      score = score + 1;
      flag = 1;
      gameState = "pause";
    }
    if(Matter.SAT.collides(stone.body,basket3.body2).collided && flag===0){
      score = score + 1;
      flag = 1;
      gameState = "pause";
    }
    if(Matter.SAT.collides(stone.body,basket3.body1).collided && flag===0){
      score = score + 1;
      flag = 1;
      gameState = "pause";
    }
  }
  if(gameState==="play" && count===5 && stone.body.speed<0.5){
    gameState="end";
  }else if(gameState==="pause" && count===5 && stone.body.speed<0.5){
    gameState="end";
  } 
  if(gameState==="end"){
    textSize(35);
    fill("aliceblue");
    text("Game Over",330,150);
    text("Press '1' to play again",250,220);
    if(keyCode===49){
      score = 0; 
      count = 0;
      flag = 0;
      Body.setPosition(stone.body,{x:width/4-100,y:height-105});
      Slingshot.AttachSlingShot(stone.body);
      gameState="play";
    }
  }
  ground.display();
  border1.display();
  border2.display();
  border3.display();
  basket1.display();
  basket2.display();
  basket3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  //log1.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  stone.display();
  Slingshot.display();

  drawSprites();
}

function mouseDragged(){
  if(Slingshot.SlingShot.bodyA===stone.body){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
}
function mouseReleased(){
  if(Slingshot.SlingShot.bodyA===stone.body){
    Slingshot.Fly();
    count = count + 1;
  }
}
function keyPressed(){
  if(keyCode===32 && stone.body.speed<0.5 && gameState==="play"){
    Body.setPosition(stone.body,{x:width/4-100,y:height-105});
    Slingshot.AttachSlingShot(stone.body);
 }else if(keyCode===32 && stone.body.speed<1 && gameState==="pause"){
    Body.setPosition(stone.body,{x:width/4-100,y:height-105});
    Slingshot.AttachSlingShot(stone.body);
    flag = 0;
    gameState = "play";
  }
}