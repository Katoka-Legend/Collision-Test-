var cars


function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(200, 200, 25, 25);
  car.shapeColor = 'white'

  wall = createSprite(1500,200,60,200)
  wall.shapeColor = color(80,80,80)
  car.velocityX = speed 

}

function draw() {
  background("black"); 
  drawSprites();

  car.collide(wall)
  if (car.x > 1400 ) {
    deformation = (0.5*weight*speed*speed)/22500
    // console.log(car.isTouching(wall))
    // console.log(deformation)
    if (deformation <100){
      car.shapeColor = 'green'
    }
    
    else if (deformation <180){
      car.shapeColor = 'yellow'
    }

    else{
      car.shapeColor = 'red'
    }

  }
}



