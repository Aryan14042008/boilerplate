function isTtouching(obj1,obj2){
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
