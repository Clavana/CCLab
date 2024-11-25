let NUM_OF_PARTICLES = 2000; // Decide the initial number of particles.
let main;
let particles = [];
let t = 0;
function setup() {
  let canvas = createCanvas(800, 600);
  main = new Particle(width / 2, 20);
  main.dia = 50;
  main.vx = 0;
  main.vy = 0;

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    let x = random(width);
    let y =
      ((-2 * height) / (width * width)) * x * x + ((2 * height) / width) * x;
    particles[i] = new Particle(x, random(y, height));
  }
}

function draw() {
  background(0);

  // if (t===0) for optimization purposes - true until main hits other particles
  if (t === 0) {
    main.display();
    main.update();
    main.alpha = 255;
    main.dia = 50;
    main.gravity = 0.1;
    for (let i = 0; i < particles.length; i++) {
      let q = particles[i];
      if (main.checkOtherParticleTrue(q.x, q.y, q.dia)) {
        t = 1;
        main.alpha = 0;
      }
    }
  }
  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display();
    if (t > 0) {
      p.update();
      if (p.checkExistance()) {
        particles.splice(i, 1);
      }
      for (let j = 0; j < particles.length; j++) {
        if (i === j) {
          continue;
        }
        let q = particles[j];
        p.checkOtherParticle(q.x, q.y, q.dia, q.vx, q.vy);
      }
    }
  }
}

class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.vx = random(-3, 3);
    this.vy = random(-3, 3);
    this.alpha = 255;
    this.gravity = 0;
    this.dia = random(20);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.alpha -= 0.5
    this.dia -= 0.01;
  }

  checkExistance() {
    if (
      this.x * this.x - this.x * width > 0 ||
      this.y * this.y - this.y * height > 0 ||
      this.dia < 0
    ) {
      return true;
    }
  }

  checkOtherParticleTrue(a, b, d) {
    if (
      pow(a - this.x, 2) + pow(b - this.y, 2) <
      pow(this.dia / 2 + d / 2, 2)
    ) {
      return true;
    }
  }
  checkOtherParticle(a, b, d, vx, vy) {
    if (
      pow(a - this.x, 2) + pow(b - this.y, 2) <
      pow(this.dia / 2 + d / 2, 2)
    ) {
      this.vx = vx;
      this.vy = vy;
      this.x += 5 * ((this.x > a) - (a > this.x));
      this.y += 5 * ((this.y > b) - (b > this.y));
    }
  }

  display() {
    noStroke();
    if (t === 0) {
      fill(255, 255, 255, this.alpha);
    } else {
      fill(random(255), random(255), random(255), this.alpha);
    }
    circle(this.x, this.y, this.dia);
  }
}