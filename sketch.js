var wall,thickness;
var bullet,bulletRightEdge,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(225,255,255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(255,255,255);

 

}

function draw() {
  background(0); 

  isTouching();

  if (isTouching()){

    if(wall.x - bullet.x < bullet.width + bullet.width / 2){

  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

     if(damage > 10){
   
     wall.shapeColor = color(255,0,0);
   
     }
   
      if(damage < 10){
   
     wall.shapeColor = color(0,255,0);
   
     }
   
   
     }

  }
  
  if(bullet.isTouching(wall)){
   
    bullet.velocityX = 0;
  
    }
  
    bullet.depth = wall.depth + 1;

    drawSprites();

  }

function isTouching(){

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){

return true;

}

return false;

}