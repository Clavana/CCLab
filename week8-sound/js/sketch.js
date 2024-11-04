let sound;

function preload() {
  sound = loadSound("assets/beat.mp3")
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  //
}

function mousePressed() {
  sound.play();
}