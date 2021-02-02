var player;
var computer;
var ball;
var gameState=0;
var goalimage1;
var goalimage2;
var ballimage;

function preload (){
goalimage1=loadImage('goalpost1.png');
goalimage2=loadImage('goalpost2.png');
ballimage=loadImage('ball.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 player=createSprite(windowWidth/2-380,windowHeight/2,23,80);
 computer=createSprite(windowWidth/2+400,windowHeight/2,23,80);
 ball=createSprite(windowWidth/2,windowHeight/2,15,15);
 ball.addImage(ballimage)
}

function draw() {
  background('green');  
  drawSprites();
  image(goalimage1,windowWidth/2-500,windowHeight/2-100,90,350)
  image(goalimage2,windowWidth/2+500,windowHeight/2-100,90,350)
  
  textSize(20);
  fill ('red');
  text ('Press space key to start the game',windowWidth/2-135,windowHeight/2-50);
  if (keyDown('space')){
  
    ball.velocityX=3;
    ball.velocityY=2;
    gameState=1;
  
    }

  

  

  if (gameState===1){
  player.y=mouseY;
  computer.y=ball.y;
  edges=createEdgeSprites();
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(player);
  ball.bounceOff(computer);

  if(ball.x<0||ball.x>400){
  ball.x=windowWidth/2;
  ball.y=windowHeight/2;

  }
  }


}