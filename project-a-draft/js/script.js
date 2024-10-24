
let n = 0;
let N; //number of lines coming from the center of the canvas
let stepSize = 5; //distance between lines (between each rotation)

let originX, originY;
let x, y; //allows points representing numbers to rotate
let px, py; //allows points representing numbers to rotate

//rotation speed control
let angle = 0;
let rotationSpeed;

// Primes coordinates arrays
let primesX = [];
let primesY = [];
let primeRad = 10;

let setsOfParticles = [];

// for color fluctuation
let rFreq, gFreq, bFreq;

function setup() {

    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");
    background(0);
    angleMode(DEGREES);

    originX = width / 2;
    originY = height / 2;

    x = 0;
    y = 0;
    px = x;
    py = y;
    stepSize = random(5, 10);

    N = floor(random(3, 7));

    rotationSpeed = random(-0.3, 0.3);

    rFreq = random(2.0, 4.0);
    gFreq = random(2.0, 4.0);
    bFreq = random(2.0, 4.0);

    noStroke();
    fill(255);
}

function draw() {
    push();
    translate(originX, originY);

    let r = (stepSize * n) / N;
    let currentAngle = (n * 360) / N;

    px = x;
    py = y;

    // this allows you to convert Cartesian coordinates to Polar coordinates
    //x = r * cos(currentAngle);
    //y = r * sin(currentAngle);

    // let's do it with vector!
    let vector = createVector(1, 0);
    vector.mult(r);
    vector.rotate(currentAngle + angle);
    x = vector.x;
    y = vector.y;

    //stroke(255, 130);
    blendMode(ADD); //***
    stroke(10, 120, 180, 150);
    line(px, py, x, y);

    if (isPrime(n)) {
        let colorR = map(sin(frameCount * rFreq), -1, 1, 0, 255);
        let colorG = map(sin(frameCount * gFreq), -1, 1, 255, 0);
        let colorB = map(sin(frameCount * bFreq), -1, 1, 0, 255);

        fill(colorR, colorG, colorB, 100);
        noStroke();
        circle(x, y, primeRad * 0.3);
        circle(x, y, primeRad * 0.6);
        circle(x, y, primeRad * 1.4);
        fill(colorR, colorG, colorB, 20);
        circle(x, y, 50); //draws a circle everytime the number at the intersection of the two lines is prime; the consecutive numbers are counted from the center of the canvas
        primesX.push(x + originX);
        primesY.push(y + originY);
    }
    pop();
    n++;
}

function keyPressed() {
    if (key === "0") {
        background(0);
        // set the origin with the circle's x and y position
        originX = width / 2;
        originY = height / 2;

        // reset
        x = 0;
        y = 0;
        px = x;
        py = y;
        stepSize = random(5, 10);

        N = floor(random(3, 7));
        n = 0;

        angle = 0;
        rotationSpeed = random(-0.3, 0.3);

        rFreq = random(2.0, 4.0);
        gFreq = random(2.0, 4.0);
        bFreq = random(2.0, 4.0);
    }
}

function isPrime(value) {
    if (value <= 1) return false;
    for (let i = 2; i <= sqrt(value); i++) {
        if (value % i == 0) {
            return false;
        }
    }
    return true;
}

function mouseReleased() {
    // check if one of the circles is clicked
    for (let i = 0; i < primesX.length; i++) {
        let pX = primesX[i];
        let pY = primesY[i];
        let distance = dist(pX, pY, mouseX, mouseY);
        if (distance < primeRad) {
            // in!

            // set the origin with the circle's x and y position
            originX = pX;
            originY = pY;

            // reset
            x = 0;
            y = 0;
            px = x;
            py = y;
            stepSize = random(5, 10);

            N = floor(random(3, 7));
            n = 0;

            angle = 0;
            rotationSpeed = random(-0.3, 0.3);

            rFreq = random(2.0, 4.0);
            gFreq = random(2.0, 4.0);
            bFreq = random(2.0, 4.0);
        } else {
            // out!
        }
    }
}

function mouseDragged() {
    angle += rotationSpeed;
}
