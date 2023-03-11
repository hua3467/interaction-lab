const tileCount = 80;
var actRandomSeed = 0;
const maxWeight = 5;
let weightX = maxWeight;
let weightY = 1;
let growSpeedX =0.0001;
let growSpeedY =0.0001;


var actStrokeCap;

function setup() {
  createCanvas(1000, 1000);
  actStrokeCap = ROUND;
  weightX = int(random(1, maxWeight));
  weightY = int(random(1, maxWeight));
}

function draw() {
  clear();
  strokeCap(actStrokeCap);
  
  randomSeed(actRandomSeed);
  
  for (let gridY = 0; gridY < tileCount; gridY++) {
    
    for (let gridX = 0; gridX < tileCount; gridX++) {
      
      var posX = width / tileCount * gridX;
      var posY = width / tileCount * gridY;
      
      var toggle = int(random(0, 2));
      
      if (toggle == 0) {
        
        weightX = weightX + growSpeedX;
        weightY = weightY - growSpeedY;
        
        if (weightX >= maxWeight || weightX <= 1) {
          growSpeedX = -growSpeedX;
        }
        
        if (weightY >= maxWeight || weightY <= 1) {
          growSpeedY = -growSpeedY;
        }
         
        strokeWeight(weightX);
        line(posX, posY, posX + width / tileCount, posY + height / tileCount);
      }
      
      if (toggle == 1) {
        strokeWeight(weightY);
        line(posX, posY + width / tileCount, posX + height / tileCount, posY);
      }
    }
  }
}

function mousePressed() {
  actRandomSeed = random(100000);
}

function keyReleased() {
  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}