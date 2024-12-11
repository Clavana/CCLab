let img;
let sizeW, sizeH;
let buttons = [];
let currentAudio = null; 

function preload() {
  img = loadImage('assets/disney.png');
}

function setup() {
  sizeW = windowWidth*2;
  sizeH = windowHeight;
  let canvas = createCanvas(sizeW, sizeH);
  canvas.parent("p5-canvas-container");

  tron = new CircleButton(sizeW * 0.16, sizeH * 0.46, "", "Did you know Tron is my favorite attraction in Disneyland? Definitely check it out when you are there, it is so much fun");
  creationDate = new CircleButton(sizeW * 0.4, sizeH * 0.36, "", "Did you know Disneyland Shanghai opened on June 16, 2016?");
  iluminationShow = new CircleButton(sizeW * 0.69, sizeH * 0.42, "assets/musicDisney.mp3", "The evening 'Ignite the Dream' show at Shanghai Disneyland is magical!");

  buttons = [tron, creationDate, iluminationShow];
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
  textSize(15);
  fill(255, 100, 100);
  stroke(255)
  strokeWeight(8)
  text(selectedName, -100, 0);
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
        if (this.name !== "") {
          if (currentAudio && !currentAudio.ended) {
            return;
          }
          currentAudio = new Audio(this.name);
          currentAudio.play();
          currentAudio.addEventListener("ended", () => {
            currentAudio = null;
          });
        }
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
      if (this.name !== "") {
        fill(0, 0, 255);
      }
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