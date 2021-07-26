var ship, shipimg, sea, seaimg
function preload(){
  //giving the ship and sea imgs
shipimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  //creating the Ship and Sea
  sea = createSprite(200,200,400)
  ship = createSprite(200,250,50,50)

  ship.addAnimation("Ship img", shipimg)
  sea.addImage("Sea img", seaimg)

  ship.scale = 0.3
  sea.x = width/2
}

function draw() {
  background("blue");
  sea.velocityX = 2
  if (sea.x>400) {
    sea.x = width/2
  }
 
  drawSprites()
}