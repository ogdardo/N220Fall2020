let sunX = 40;

function setup() {
    createCanvas(400,300);
    background(200)

}

function draw() {
    background(100);
    sunX++
    drawSun("#4287f5", 20, mouseY, mouseX);
} 


function drawSun(sunColor, numRays, yHeight) {
    console.log(sunColor);
    fill(sunColor);
    stroke(sunColor);
    for(var i = 0; i < numRays; i++) {
        line(200, yHeight, i * 20, 300);
    }
    circle(200, yHeight, 40);
}
