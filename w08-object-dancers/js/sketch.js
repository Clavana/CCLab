let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  dancer = new MarlenaDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  dancer.update();
  dancer.display();
}

class MarlenaDancer {
  constructor(startX, startY) {
    this.originX = startX;
    this.originY = startY;
    this.x = startX;
    this.y = startY;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.counter = 0;
    this.directionX = random(-10,10);
    this.directionY = random(-10,10);
  }

  update() {
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    
    this.x += this.directionX;
    this.y += this.directionY;
    
    if (this.x + 30 > this.originX + 100) {
      this.directionX = random(-10,-1);
      this.counter++;
    }
    if (this.x - 30 < this.originX - 100) {
      this.directionX = random(1,10);
      this.counter++;
    }
    if (this.y + 30 > this.originY + 100) {
      this.directionY = random(-10,-1);
      this.counter++;
    }
    if (this.y - 30 < this.originY - 100) {
      this.directionY = random(1,10);
      this.counter++;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    this.drawFace(0, 0);
    pop();
    push()
    translate(this.originX, this.originY)
    //this.drawReferenceShapes();
    pop()
  }

  drawFace(x, y) {
    push();
    translate(x, y);
    fill(this.r, this.g, this.b);
    circle(0, 0, 50);
    fill(0);
    ellipse(-10, -10, 5, 10);
    ellipse(10, -10, 5, 10);
    noFill();
    stroke(0);
    strokeWeight(4);
    let mouthStart = 0
    if (this.counter < 10) {
      mouthStart = 0
    }    
    if (this.counter >= 10) {
      mouthStart = PI
    }
    let mouthEnd = 0
    if (this.counter < 10) {
      mouthEnd = PI
    }    
    if (this.counter >= 10) {
      mouthEnd = TWO_PI
    }
    if (this.counter == 20) {
      this.counter = 0
    }
    arc(0, 10, 25, 15, mouthStart, mouthEnd);
    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255);
    rect(-100, -100, 200, 200);
  }
}