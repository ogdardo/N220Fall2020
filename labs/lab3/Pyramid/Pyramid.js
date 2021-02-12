function setup() {
    createCanvas(125,125);
    stroke(255);
    strokeWeight(2);
}

function draw() {
    background(255);
    fill(255, 0, 0);
  
    for (let g = 0; g < 4; g++) {
        for (let v = 0; v <= g ; v++) {
           square(v * 30, g * 30, 30);
        }
    }
}