var fixrect;
var movrect;
var bat,ball;
function setup() {
  createCanvas(800,400);
  fixrect = createSprite(200, 200, 50, 80);
  fixrect.shapeColor = "green";
  movrect = createSprite(400,200,80,30);
  movrect.shapeColor = "green";
  bat = createSprite(500,20,20,200);
  ball = createSprite(50,50,20,20);
  ball.shapeColor = "blue";
  ball.velocityX = 3;
}

function draw() {
  background(255,255,255);  
  movrect.x = World.mouseX;
  movrect.y = World.mouseY;
  if(isTtouching(fixrect,movrect)){
    fixrect.shapeColor = "red";
    movrect.shapeColor = "red"; 
  }
  else{
    fixrect.shapeColor = "green";
    movrect.shapeColor = "green";

  }

 if(bounceOff(ball,bat)){
  ball.shapeColor = "red";
 }

  drawSprites();

}
/*function isTtouching(obj1,obj2){
  if((obj1.x - obj2.x) < (obj1.width/2 + obj2.width/2) && 
  (obj2.x - obj1.x) < (obj1.width/2 + obj2.width/2) && 
  (obj1.y -obj2.y) < (obj1.height/2 + obj2.height/2) && 
  (obj2.y - obj1.y) < (obj1.height/2 + obj2.height/2))
  {
    console.log("isTouching")
    return true;
    

  }
  else{
   return false; 
      }
  

}

function bounceOff(obj1,obj2){
  if((obj1.x - obj2.x) < (obj1.width/2 + obj2.width/2) && 
  (obj2.x - obj1.x) < (obj1.width/2 + obj2.width/2) && 
  (obj1.y -obj2.y) < (obj1.height/2 + obj2.height/2) && 
  (obj2.y - obj1.y) < (obj1.height/2 + obj2.height/2))
  {
    console.log("isTouching")
   
    obj1.velocityX = (-1) * obj1.velocityX;
    //obj1.shapeColor = "red";
    return true;
  }
  else{
   return false; 
      }
}

function collide(obj1,obj2){
  if((obj1.x - obj2.x) < (obj1.width/2 + obj2.width/2) && 
  (obj2.x - obj1.x) < (obj1.width/2 + obj2.width/2) && 
  (obj1.y -obj2.y) < (obj1.height/2 + obj2.height/2) && 
  (obj2.y - obj1.y) < (obj1.height/2 + obj2.height/2))
  {
    obj1.velocityX = 0;
    obj1.velocityY = 0;
    return true;
    

  }
  else{
   return false; 
      }
  
}
*/