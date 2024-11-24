let img;
let yugarden;
let sizeW, sizeH;

function preload() {
  img = loadImage('assets/yuGarden.jpg');
}

function setup() {
  sizeW = windowWidth*3/4;
  sizeH = windowHeight*3/4;
  let canvas = createCanvas(sizeW, sizeH);
  canvas.parent("p5-canvas-container");

  background(0, 0, 0);
  image(img, 0, 0, sizeW, sizeH);

  //yugarden = new circleButton(sizeW*0.465, sizeH*0.19)
}

function draw() {

  //yugarden.display()
  //yugarden.checkHoover(mouseX, mouseY)
}

class circleButton {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.dia = 10
    this.hoover = false
  }

  checkHoover(userMouseX, userMouseY) {
    if (dist(this.x, this.y, userMouseX, userMouseY) < this.dia/2) {
      this.hoover = true;
    } else {
      this.hoover = false;
    }
  }

  display() {
    stroke(0,0,0);
    if (!this.hoover) {
      fill(255, 255, 0);
      this.dia = 10
      circle(this.x, this.y, this.dia);
    } else {
      fill(255, 255, 255);
      this.dia = 10
      circle(this.x, this.y, this.dia);
    }
  }
}