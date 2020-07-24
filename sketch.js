var canvas, backgroundImage; 

var index=0; 

var gameState = 0;
var playerCount;
var allPlayers;
var database; 
var distance=0; 

var hurdles;  
var ObstaclesGroup1, ObstaclesGroup2, ObstaclesGroup3, ObstaclesGroup4; 

var form, player, game; 

var players, player1, player2, player3, player4; 

var track, player1Img, player2Img, player3Img, player4Img, ground, hurdleImg;

var invisibleGround1, invisibleGround2, invisibleGround3, invisibleGround4; 

function preload(){ 
  
  ground= loadImage("images/ground.png");
  track= loadImage("images/track2.png"); 
  
  player1Img= loadImage("images/Runner1.png");  
  player2Img= loadImage("images/Runner2.png"); 
  player3Img= loadImage("images/Runner3.png"); 
  player4Img= loadImage("images/Runner4.png");  

  hurdleImg=loadImage("images/Hurdle.png");  
 
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight-30); 
  database = firebase.database(); 
  ObstaclesGroup1= createGroup(); 
  ObstaclesGroup2= createGroup(); 
  ObstaclesGroup3= createGroup(); 
  ObstaclesGroup4= createGroup(); 

  game = new Game();
  game.getState();
  game.start();
}


function draw(){  

  if(playerCount === 4){
    game.update(1); 
  }
  if(gameState === 1){
    clear();
    game.play(); 
    
  
  }
  if(gameState === 2){
    game.end();
  } 
}
