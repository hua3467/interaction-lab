const segmentCount = 30;
const radius = 200;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {

  colorMode(HSB, 360, 100, 100, 1);
  background(360, 0, height);

  let angleStep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width / 2, height / 2);

  for (var angle = 0; angle <= 360; angle += angleStep) {
    var vx = width / 2 + cos(radians(angle)) * radius;
    var vy = height / 2 + sin(radians(angle)) * radius;
    vertex(vx, vy);
    fill(angle, 100, 100);
  }

  endShape();

}

