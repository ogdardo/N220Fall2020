var xB = Math.floor(Math.random() * 0) + 200;
var yB = 50
var d = 20;
var xBC = 3;
var yBC = 3;
var xP;
var yP;
var pW = 75
var pH = 10
var started = false;

function setup() {
    createCanvas(400,300);
}

function draw(){
    background(200)
    fill("#4287f5")
    circle(xB, yB, d, d);
    if (!started) {
        xP = 400/1;
        yP = 300 - 50
        started = true;
    }
    fill(100);
    rect(xP, yP, pW, pH);
    xB += xBC;
    yB += yBC;
    if (xB < d/2 || xB > 400 - 0.5*d) {
    xBC *= -1;
  }
  if (yB < d/2 || yB > 300 - d) {
    yBC *= -1;
  }
  if ((xB > xP && xB < xP + pW) && (yB + (d/2) >= yP)) {
    xBC *= -1;
    yBC *= -1;
    }
    fill("black");
    textSize(12);
    text("Use A & D to move", 150,290);
}
if (!started) {
    xP = 400/2;
    yP = 300 - 50
    started = true;
}

function keyPressed() {
    if (keyCode === 65) {
      xP -= 50;
    } else if (keyCode === 68) {
      xP += 50;
    }
  }