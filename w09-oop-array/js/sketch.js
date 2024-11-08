let particles = [];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(255);
}

function draw() {
  background(0);
  
  // Loop through each set of particles
  for (let i = 0; i < particles.length; i++) {
    let particles = setsOfParticles[i];
    for (let j = setsOfParticles.length - 1; j >= 0; j--) {
      setsOfParticles[j].update();
      setsOfParticles[j].show();
      if (setsOfParticles[j].finished()) {
        // remove this particle
        setsOfParticles.splice(j, 1);
      }
    }
  }
}

function mouseClicked() {
  let setsOfParticlesarticles = [];
  for (let i = 0; i < 100; i++) {
    let p = new Particle(mouseX, mouseY);
    setsOfParticles.push(p);
  }
  particles.push(setsOfParticles);
}

class Particle {

  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.vx = random(-3, 3);
    this.vy = random(-3, 3);
    this.alpha = 255;
    this.gravity = 0.1
    this.dia = 10
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity
    this.alpha -= 3;
  }

  display() {
    push();
    translate(this.x,this.y)

    noStroke();
    fill(random(0,255), random(0,255), random(0,255), this.alpha);
    circle(this.x, this.y, this.dia);

    pop();
  }

}