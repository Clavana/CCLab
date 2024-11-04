let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  dancer = new MoonDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  //drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}





class MoonDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  update() {
    this.r = map(sin(frameCount * 0.07), -1, 1, 0, 255);
    this.g = map(mouseX, 0, width, 0, 255);
    this.b = map(sin(frameCount * 0.06), -1, 1, 0, 255);
  }
  display() {
    push();
    translate(this.x, this.y);

    this.drawBody();

    this.drawLimb(40, -20, radians(random(-10, 10)));
    this.drawLimb(40, 0, radians(random(-10, 10)));
    this.drawLimb(40, 20, radians(random(-10, 10)));

    this.drawLimb(-40, -20, radians(random(170, 190)));
    this.drawLimb(-40, 0, radians(random(170, 190)));
    this.drawLimb(-40, 20, radians(random(170, 190)));

    this.drawReferenceShapes();
    pop();
  }
  drawLimb(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle)
    strokeWeight(10);
    stroke(255, 0, 255);
    line(0, 0, 100, 0);
    pop();
  }
  drawBody() {
    let sinValue = sin(frameCount * 0.15) * 30;
    noStroke();
    fill(this.r, this.g, this.b);
    circle(0 - sinValue, 50, 100);
    fill(this.b, this.r, this.g);
    circle(0, 0, 100);
    fill(this.g, this.b, this.r);
    circle(0 + sinValue, -50, 100);
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}