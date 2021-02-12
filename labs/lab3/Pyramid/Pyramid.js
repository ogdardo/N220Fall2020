function setup() {
    createCanvas(100,100);
    stroke(255);
    strokeWeight(2);
}

function draw() {
    background(255);
    fill(204, 43, 35);
  
    for (let g = 0; g < 4; g++) {
        for (let v = 0; v <= g ; v++) {
           square(v * 25, g * 25, 25);
        }
    }
}