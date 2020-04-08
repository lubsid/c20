var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
 fixedrect=createSprite(200,200,50,80);
movingrect=createSprite(200,400,50,30);
movingrect.shapeColor="green";
movingrect.velocityY = -5;
  fixedrect.velocityY = +5;
  
}

function draw() {
  background(255);
 // movingrect.x=World.mouseX;
 // movingrect.y=World.mouseY;  

 console.log(movingrect.x-fixedrect.x);
if(movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2 &&
  fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2 )
  {
    movingrect.velocityX = movingrect.velocityX * (-1);
    fixedrect.velocityX = fixedrect.velocityX * (-1);

  }
  if (movingrect.y-fixedrect.y<=fixedrect.width/2+movingrect.width/2 &&
  fixedrect.y-movingrect.y<=fixedrect.width/2+movingrect.width/2 )
{
  movingrect.velocityY = movingrect.velocityY * (-1);
    fixedrect.velocityY = fixedrect.velocityY * (-1);
} 
  drawSprites();
}