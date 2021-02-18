let positions = [0];
let x = 400

function setup() {
createCanvas(800, 600);
}

function draw() {
    background(0);
    if(frameCount % 10 == 0) {
        positions.push(0);
    }
    for(let i = 0; i < positions.length; i++) {
        circle(x, positions[i], 80);
        positions[i] += 5;
    }
}