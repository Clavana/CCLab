let img;
let nyu;
let disney;
let pearl;
let chocolate;
let sizeW, sizeH;
let chocolate_image;

function preload() {
  img = loadImage('../assets/mapLarge.png');
}

function setup() {
  sizeW = windowWidth*3/4;
  sizeH = windowHeight*3/4;
  let canvas = createCanvas(sizeW, sizeH);
  canvas.parent("p5-canvas-container");

  background(0, 0, 0);
  image(img, 0, 0, sizeW, sizeH);

  nyu = new circleButton(sizeW*0.44, sizeH*0.63)
  disney = new circleButton(sizeW*0.9, sizeH*0.66)
  pearl = new circleButton(sizeW*0.49, sizeH*0.12)
  chocolate = new circleButton(sizeW*0.465, sizeH*0.19)
  taikooli = new circleButton(sizeW*0.438, sizeH*0.61)
  bund = new circleButton(sizeW*0.46, sizeH*0.129)
  yugarden = new circleButton(sizeW*0.46, sizeH*0.2)
  jingan = new circleButton(sizeW*0.33, sizeH*0.2)  
}

function draw() {

  
  nyu.display()
  nyu.checkHoover(mouseX, mouseY)
  disney.display()
  disney.checkHoover(mouseX, mouseY)
  pearl.display()
  pearl.checkHoover(mouseX, mouseY)
  chocolate.display()
  chocolate.checkHoover(mouseX, mouseY)
  taikooli.display()
  taikooli.checkHoover(mouseX, mouseY)
  bund.display()
  bund.checkHoover(mouseX, mouseY)
  yugarden.display()
  yugarden.checkHoover(mouseX, mouseY)
  jingan.display()
  jingan.checkHoover(mouseX, mouseY)  
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