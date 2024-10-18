//needed to determine whether the number is prime
let n = 0;
let N; //number of lines coming from the center of the canvas
let stepSize = 5; //distance between lines (between each rotation)
let x, y; //allows points representing numbers to rotate
let px, py; //allows points representing numbers to rotate

//rotation speed control
let angle = 0;
let rotationSpeed = 1;

//
function isPrime(value) {
    if (value <= 1) return false;
    for (let i = 2; i <= sqrt(value); i++) {
        if (value % i == 0) {
            return false;
        }
    }
    return true;
}

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");
    background(0);
    N = floor(random(3, 5));
    textSize(16);
    text("N = " + N, 10, 20);

    x = width / 2;
    y = height / 2;
    px = x;
    py = y;

    noStroke();
    fill(255);

    angleMode(DEGREES);
    stepSize = random(5, 10);
}

function draw() {
    push();
    translate(width / 2, height / 2);
    rotate(angle);

    let r = (stepSize * n) / N;
    let currentAngle = (n * 360) / N;

    px = x;
    py = y;

    x = r * cos(currentAngle);
    y = r * sin(currentAngle);

    stroke(255, 130);
    line(px, py, x, y);

    if (isPrime(n)) {
        fill(random(255), random(255), random(255));
        noStroke();
        circle(x - 1 / 2, y - 1 / 2, 20); //draws a circle everytime the number at the intersection of the two lines is prime; the consecutive numbers are counted from the center of the canvas
    }
    pop();
    n++;

    if (mouseIsPressed === true) {
        angle += rotationSpeed;
    }
}
