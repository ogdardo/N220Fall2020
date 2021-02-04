let xPos = 200
let yPos = 150

function setup() {
    createCanvas(800,600);
    noStroke();
  }

  function draw() {
      background(158,115,115);
      xPos = xPos + 5;
      fill(232,224,130)
      circle(xPos,yPos,40);
      if(xPos > 800) {
          xPos = 0;
      }
  }