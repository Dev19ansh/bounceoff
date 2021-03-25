var fixedRect, movingRect;
var x1,x2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-5;

  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=5;

  x1 = createSprite(300,200,80,30);
  x1.shapeColor = "green";
  x1.debug = true;
  x1.velocityY=5;

  x2 = createSprite(300, 400, 50, 80);
  x2.shapeColor = "green";
  x2.debug = true;
  x2.velocityY=-5;
}

function draw() {
  background(0,0,0);  

  
  bounceOff(movingRect,fixedRect);
  bounceOff(x1,x2);
  drawSprites();
}

