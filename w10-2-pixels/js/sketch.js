let cam;


function setup() {
 let canvas = createCanvas(640, 480);
 canvas.parent("p5-canvas-container");
 background(240);


 cam = createCapture(VIDEO);
 cam.size(640, 480);
 cam.hide();
}


function draw() {
 background(240);


 let gridSize = 10;
 cam.loadPixels();
 for (let y = 0; y < cam.height; y += gridSize) {
   for (let x = 0; x < cam.width; x += gridSize) {
     let index = (x + y * width) * 4;
     let r = cam.pixels[index + 0];
     let g = cam.pixels[index + 1];
     let b = cam.pixels[index + 2];


     noStroke();
     fill(r, g, b);
     ellipse(x + gridSize / 2, y + gridSize / 2, gridSize, gridSize);
   }
 }


 //image(cam, 0, 0);
}
