var fixedRect, movingRect;
var ob1, ob2,ob3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(100,50,50,50);
  ob1.debug = true;
  ob2 = createSprite(200,50,50,50);
  ob2.debug = true;
  ob2.velocityX=2;
  ob3 = createSprite(300,50,50,50);
  ob3.debug = true;
  ob3.velocityX=-2;
}

function draw() {
  
  background(0,0,0);  
  bounceOff(ob2,ob3);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(ob2,movingRect)){
    ob2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    ob2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  drawSprites();
}

