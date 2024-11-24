let img;
sizeW = windowWidth*3/4;
sizeH = windowHeight*3/4;
// Load an image and create a p5.Image object.
function preload() {
  img = loadImage('assets/mapLarge.png');
  chocolate_image = loadImage('assets/mapLarge.png');
}

function setup() {
  let canvas = createCanvas(sizeW, sizeH);
  canvas.parent("p5-canvas-container");

  background(0, 0, 0);
  image(img, 0, 0, sizeW, sizeH);

  nyu = new cirlceButton(sizeW*0.44, sizeH*0.63)
  disney = new cirlceButton(sizeW*0.9, sizeH*0.66)
  pearl = new cirlceButton(sizeW*0.49, sizeH*0.12)
  chocolate = new cirlceButton(sizeW*0.47, sizeH*0.18)
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
}

class cirlceButton {
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