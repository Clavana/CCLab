let img;
let sizeW, sizeH;
let buttons = [];

function preload() {
  img = loadImage('assets/mapLarge.png');
}

function setup() {
  sizeW = windowWidth*3/4;
  sizeH = windowHeight*3/4;
  let canvas = createCanvas(sizeW, sizeH);
  canvas.parent("p5-canvas-container");

  chocolateMuseum = new CircleButton(sizeW*0.465, sizeH*0.19, "chocolateMuseum", "Chocolate Museum")
  theBund = new CircleButton(sizeW*0.46, sizeH*0.129, "theBund", "The Bund")
  yuGarden = new CircleButton(sizeW*0.46, sizeH*0.2, "yuGarden", "Yu Garden")
  jingan = new CircleButton(sizeW*0.33, sizeH*0.2, "jingan", "Jing'an Temple")

  buttons = [chocolateMuseum, theBund, yuGarden, jingan];
}

function draw() {
  background(0, 0, 0);
  image(img, 0, 0, sizeW, sizeH);
  
  let selectedName = "";
  let selected = false;
  for (let i=0; i<buttons.length; i++) {
    let btn = buttons[i];
    if (selected == false) {
      selectedName = btn.checkHoover(mouseX, mouseY);
      if (selectedName != "") {
        // seleteced
        selected = true;
      }
    }
    btn.display();
  }
  
  push();
  translate(mouseX, mouseY)
  textSize(30);
  fill(255, 100, 100);
  stroke(255)
  strokeWeight(8)
  text(selectedName, -70, 0);
  pop();

}

class CircleButton {
  constructor(startX, startY, name, displayName) {
    this.name = name;
    this.x = startX;
    this.displayName = displayName;
    this.y = startY;
    this.dia = 20
    this.hoover = false
  }

  checkHoover(userMouseX, userMouseY) {
    if (dist(this.x, this.y, userMouseX, userMouseY) < this.dia/2) {
      this.hoover = true;
      if (mouseIsPressed) {
        let url = this.name + ".html";
        window.open(url, "_self");
      }
      return this.displayName;
    } else {
      this.hoover = false;
      return "";
    }
  }

  display() {
    push();
    if (!this.hoover) {
      fill(255, 255, 0);
      circle(this.x, this.y, this.dia);
    } else {
      fill(255,100,100);
      circle(this.x, this.y, this.dia);
      noFill();
      strokeWeight(2)
      stroke(255,155,155);
      circle(this.x, this.y, this.dia*1.5);
    }
    pop();
  }
  
}