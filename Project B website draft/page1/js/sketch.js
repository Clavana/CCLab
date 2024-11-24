function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(255, 255, 0);
}

function draw() {
  background(255, 255, 0);
  circle(random(width), random(width), 30);
}