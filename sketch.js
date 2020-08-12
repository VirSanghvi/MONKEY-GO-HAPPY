
var player;

var bananaImage;
    

var bananasGroup, backgr

var obstacleImage , obstaclesGroup

var groundImage

var score
 
function preload(){
  
  backImage=loadImage("jungle2.jpg");
  
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png",
                               "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png",
                               "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("Bananas.png");
  obstacleImage=loadImage("stone.png");
   
  }

function setup() {
  
  createCanvas(600,300);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  ground = createSprite(400,240,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  bananasGroup  = new Group();
  bananasGroup.scale=0.3; 
  
  obstaclesGroup = new Group();
  obstaclesGroup.scale=0.3;
 
  player= createSprite(50,200,20,50);
  player.addAnimation("running",player_running);
  player.scale =0.1
 
}

function draw(){
 
  background(255);
    
     //jump when the space key is pressed
  if(keyDown("space")){
  player.velocityY=-10;
  }
    
  spawnObstacles();
  
  spawnBananas();    
 
  player.velocityY=player.velocityY+0.8;  
  
  if (ground.x < 0){
   
   ground.x = ground.width/2;
   
 }
   
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
   if(bananasGroup.isTouching(player)){
  
     bananasGroup.destroyEach();
     score=score+2;
   
    }
    
   if(obstaclesGroup.isTouching(player)){
     
     score=score-5;
   
    }  
  
  player.collide(ground);
  
    drawSprites(); 
 
  //Display Score
  stroke("white"); 
  textSize("20");
  fill("white");
  score = Math.ceil (World.frameCount/World.frameRate);
  if(bananasGroup.isTouching){}
  text("Score:"+score,100,50);  
}

function spawnBananas(){

//Write code here to spawn banana
  
if(frameCount%120 === 0){

  var banana = createSprite(600,250,40,10);
    banana.y = random(50,250);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX= -5;
     //assign lifetime to the variable
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    
    
  
  //Add each banana to the group
  bananasGroup.add(banana);
  
}
  
}   
  function spawnObstacles(){
 
// Write code here to spawn obstacle  
  
if(frameCount%300 === 0){

var obstacle= createSprite(600,250,10,10);
  obstacle.velocityX= -4;
  obstacle.addImage(obstacleImage);
  obstaclesGroup.collide(ground);
  
  //Assign scale and lifetime to Obstacles
  obstacle.scale= 0.5;
  obstacle.lifetime=300;
  
  //Add each obstacle to the group
  obstaclesGroup.add(obstacle);
  }
}
  