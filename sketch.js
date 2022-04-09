var denny,Dennyimg,shootingdennyimg
var sky,Ground,skyimg,groundimg,invisgron
var back
var darkcryst,darkcrystimg,darkcrystg
var gamestate=1
var play=1
var end=2
var gameover,gameovertxt
var b
function preload(){
 groundimg=loadImage("ground.png")
 Dennyimg=loadImage("denny.png")
 skyimg=loadImage("sky.png")
 darkcrystimg=loadImage("dark crystel.png")
 gameovertxt=loadImage("game over .png")
}

function setup() {
 

 createCanvas(600,600);
 Ground=createSprite(300,260,88,600)
 Ground.addImage( "Ground",groundimg)
 Ground.scale=3.9
 
 invisgron=createSprite(120,350,240,20)
 invisgron.visible=false
 gameover=createSprite(300,700)
 gameover.addImage(gameovertxt)
  gameover.scale=0.4
 
 b=createSprite(30,30,300,300)   
 b.visible=false
 denny=createSprite(100,254)
 denny.addImage("denny",Dennyimg)           
 denny.debug= true
 denny.setCollider("rectangle",-47,43,19,20)
 denny.scale=1.7
                
 darkcrystg=new Group();
}

function draw() {
  background("WHITE")
 
 if(gamestate===play){
   if(keyDown("space")){
     denny.y= -0.00001
    }
   
   if(Ground.x < 10){
     Ground.x = Ground.width/1;
    }
  
   denny.collide(invisgron)
  
    Ground.velocityX = -2;
   //gameover.visible=false
   
    if(darkcrystg.isTouching(denny)){
     denny.destroy()
     gameState = end
    Ground.destroy();
    darkcrystg.destroy()
  }  

obstacle()
   denny.y=denny.y +10
   Ground.x=Ground.x-2
    
  } 
 
  if(gamestate===end){
   gameover.x = b.x
   
 
  }
 



 drawSprites()
 fill ("red")
 text(mouseX +"," +mouseY,200,50)
 
}

function obstacle(){

 if(frameCount %110 === 0){
   darkcryst=createSprite(600,315,20,20)
   darkcryst.addImage(darkcrystimg)
   
   darkcryst.velocityX=-2
   darkcryst.scale = 0.25
   darkcryst.debug=true
   darkcryst.setCollider("circle",0,0,120)
   darkcrystg.add(darkcryst)
  }
}